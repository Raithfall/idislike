'use strict';

/* Constants */

angular.module('idislike.cst', [])
    .constant('USER_ROLES', {
        'all': '*',
        'admin': 'ROLE_ADMIN',
        'user': 'ROLE_USER'
    })

    .constant('LANGUAGES', {
        'ca': 'Catalan',
        'zh-tw': 'Chinese (traditional)',
        'da': 'Danish',
        'en': 'English',
        'fr': 'French',
        'de': 'German',
        'kr': 'Korean',
        'pl': 'Polish',
        'pt-br': 'Portuguese (Brazilian)',
        'ru': 'Russian',
        'es': 'Spanish',
        'sv': 'Swedish',
        'tr': 'Turkish'
    });
