export default ngModule => {
    
    require('./main')(ngModule);
    require('./blog')(ngModule);
    require('./services')(ngModule);
    require('./home')(ngModule);
    require('./landing')(ngModule);
    require('./404')(ngModule);
}
