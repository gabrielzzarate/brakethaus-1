// Placed Modules in SHM Object to make file cleaner
// Contains: Express, Logger, Morgan, BodyParser, Cookie Parser, Path, Consolidate, and HTTP
import SERVER_HELPER_MODULES from './setup';
console.log("Directory Name", SERVER_HELPER_MODULES.path.join(__dirname, '../src'));
// Temporary Placement of Routes
// TODO: Replace with Bootstrapper function
import Index from './routes';

// Express App
let app = SERVER_HELPER_MODULES.exp();


app.use(SERVER_HELPER_MODULES.lgr('dev'));
app.use(SERVER_HELPER_MODULES.bdyPrsr.json());
app.use(SERVER_HELPER_MODULES.bdyPrsr.urlencoded({ extended: false }));
app.use(SERVER_HELPER_MODULES.ckPrsr());

// Temporary Placement of Static Resource Location
app.use(SERVER_HELPER_MODULES.exp.static( SERVER_HELPER_MODULES.path.join(__dirname, './') ));
app.use('/src', SERVER_HELPER_MODULES.exp.static( SERVER_HELPER_MODULES.path.join(__dirname,'../src' ) ));

app.set('port', 8888);
app.set('host', 'http://localhost:' + app.get('port') + '/');
app.set('x-powered-by', false);
app.engine('html', SERVER_HELPER_MODULES.cons.lodash);
app.set('view engine', 'html');
app.set('views', SERVER_HELPER_MODULES.path.join(__dirname, './'));

app.use('/', Index);


let server = SERVER_HELPER_MODULES.http.createServer(app);

server.listen(app.get('port'));