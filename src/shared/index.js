export default ngModule => {
    
    require('./ohs-content-renderer')(ngModule);
    require('./ohs-global-masthead')(ngModule);
    require('./ohs-mailinglist-signup')(ngModule);
    require('./ohs-about-callout')(ngModule);

}
