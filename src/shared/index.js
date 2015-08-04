export default ngModule => {
    
    require('./ohs-content-renderer')(ngModule);
    require('./ohs-global-masthead')(ngModule);
    require('./ohs-mailinglist-signup')(ngModule);
    require('./ohs-about-callout')(ngModule);
    require('./ohs-about-promo')(ngModule);
    require('./ohs-global-footer')(ngModule);
    require('./ohs-contact')(ngModule);
    require('./ohs-meta')(ngModule);
    require('./ohs-meta-group')(ngModule);
    require('./ohs-quote')(ngModule);
    require('./ohs-icon')(ngModule);
    require('./ohs-logo')(ngModule);
    require('./ohs-service-card')(ngModule);
    require('./ohs-navmenu-button')(ngModule);
    require('./ohs-blogpost-card')(ngModule);
    require('./ohs-social-card')(ngModule);
    require('./ohs-filter-htmltoplaintext')(ngModule);
    require('./ohs-gallery-item-promo')(ngModule);
    require('./ApiBaseService')(ngModule);

}
