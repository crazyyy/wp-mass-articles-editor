( function( api ) {

    // Extends our custom "amadeus-theme-info" section.
    api.sectionConstructor['amadeus-theme-info'] = api.Section.extend( {

        // No events for this type of section.
        attachEvents: function () {},

        // Always make the section active.
        isContextuallyActive: function () {
            return true;
        }
    } );

    // Extends our custom "amadeus-theme-info-sectionsections" section.
    api.sectionConstructor['amadeus-theme-info-section'] = api.Section.extend( {

        // No events for this type of section.
        attachEvents: function () {},

        // Always make the section active.
        isContextuallyActive: function () {
            return true;
        }
    } );


} )( wp.customize );
