export default ngModule => {

    ngModule

        // API BASE
        .constant('API_BASE_URL', __API_BASE_URL__)

        // Global Masthead theme
        .constant('GLOBAL_MASTHEAD_THEMES', {
            BLUE: 'ohs-global-masthead--blue',
            TRANSPARENT: 'ohs-global-masthead--transparent',
            ORANGE: 'ohs-global-masthead--orange'
        })

        // Site name
        .constant('SITE_NAME', '100 Shapes – UX & Design for broadcast media')

        // Central store of Company meta inf
        .constant('COMPANY_META', {
            phone: {
                number: '+44 203 7738175',
                label: 'Call',
                icon: 'line-phone',
                icon_sm: 'line-sm-phone',
                target: 'tel:+442037738175'
            },
            email: {
                address: 'hello@100shapes.com',
                label: 'Email',
                icon: 'line-mail',
                icon_sm: 'line-sm-mail',
                target: 'mailto:hello@100shapes.com'
            },
            location: {
                address: 'W1T 4EL, London UK',
                label: 'Find us',
                icon: 'line-map_marker',
                target: 'https://goo.gl/maps/jVuhA'
            },
            social: {
                'twitter': {
                    icon: 'fill-twitter',
                    target: 'https://twitter.com/100shapes',
                    handle: '@100shapes'
                },
                'linkedin': {
                    icon: 'fill-linkedin',
                    target: 'https://www.linkedin.com/company/100-shapes',
                    handle: '100shapes'
                },
                'dribbble': {
                    icon: 'fill-dribbble',
                    target: 'https://dribbble.com/100shapes',
                    handle: '100shapes'
                }
            }
        })

        .constant('DEFAULT_SOCIAL_IMAGE', require('./img/shared-social-media-image.png'))

        // Authors
        .constant('AUTHORS', [
            {
                name: 'Michele Memoli',
                email: 'michele@100shapes.com',
                profile: require('./img/profiles/michele.jpg'),
                description: "Michele Description text"
            },

            {
                name: 'Chris Elphick',
                email: 'chris@100shapes.com',
                profile: require('./img/profiles/chris.jpg'),
                description: "Chris Description text"
            },

            {
                name: 'Paolo Memoli',
                email: 'paolo@100shapes.com',
                profile: require('./img/profiles/paolo.jpg'),
                description: "Paolo Description text"
            },

            {
                name: 'Trev Morris',
                email: 'trevor@100shapes.com',
                profile: require('./img/profiles/trevor.jpg'),
                description: "Trevor Description text"
            }
        ])


        .constant('DEFAULT_MAILINGLIST_SIGNUP_CONFIG', {
            slim: false,
            headline: 'Join our subscribers',
            intro: 'Regular news from our UX Strategists and Designers.'
        })

        .constant('CLIMB_FEED_ID', '55a4dac845284e58ac50ee1c')

        //Scroll options
        .value('duScrollDuration', 200)
        .value('duScrollOffset', 300)
    ;
};
