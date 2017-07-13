// Placed Modules in SHM Object to make file cleaner
// Contains: Express, Logger, Morgan, BodyParser, Cookie Parser, Path, Consolidate, and HTTP
const SERVER_HELPER_MODULES = require('./setup.js');

// Temporary Placement of Routes
// TODO: Replace with Bootstrapper function
let index = require('./routes/index.js');

// Express App
let app = SERVER_HELPER_MODULES.exp();

app.use(SERVER_HELPER_MODULES.lgr('dev'));
app.use(SERVER_HELPER_MODULES.bdyPrsr.json());
app.use(SERVER_HELPER_MODULES.bdyPrsr.urlencoded({ extended: false }));
app.use(SERVER_HELPER_MODULES.ckPrsr());

// Temporary Placement of Static Resource Location
app.use(SERVER_HELPER_MODULES.exp.static( SERVER_HELPER_MODULES.path.join(__dirname, './') ));

app.set('port', 8888);
app.set('host', 'http://localhost:' + app.get('port') + '/');
app.set('x-powered-by', false);
app.engine('html', SERVER_HELPER_MODULES.cons.lodash);
app.set('view engine', 'html');
app.set('views', SERVER_HELPER_MODULES.path.join(__dirname, './'));

app.use('/', index);

let server = SERVER_HELPER_MODULES.http.createServer(app);

server.listen(app.get('port'));
