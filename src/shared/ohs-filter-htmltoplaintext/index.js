module.exports = function(ngModule) {

    ngModule
        .filter('htmlToPlaintext', htmlToPlaintext);

    function htmlToPlaintext() {
        return (text) => {
            return String(text).replace(/<[^>]+>/gm, '');
        };
    }


};