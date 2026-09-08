var config = {
    // The PUBLISHED style. This is the one to submit with.
    style: 'mapbox://styles/nishi823/cmts832ad007301sdhh71cyd5',

    // Published 8 September at 10:02 with all six layers. Do not swap this for
    // the /draft URL on a live site: draft styles are uncached and rate limited.

    accessToken: 'pk.eyJ1IjoibmlzaGk4MjMiLCJhIjoiY210cjUxeXBhMDAxdzJ5cTRxcjJjN2VhYSJ9.yCGxwttMMktfZVn5Eqquag',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    title: 'A Town within the City',
    subtitle: "This website maps the history of Mumbai's chawls and their present demolition. Built from 1920 by the Bombay Development Department, roughly 207 blocks housed the workers of the cotton mills that made the city's wealth. One hundred and twenty one of them stand at Worli, more than twice any other site, and are being replaced by residential towers of up to 40-66 floors. The objective is to show that history in sequence, and to make visible what a redevelopment plan does not record: the shared spaces, the routines and the culture that grew inside those blocks.",
    byline: 'Nishi Savani | A0266593N | DEP5118 ITA2 | National University of Singapore',
    footer: 'DEP5118 Community Data Gathering and Visualization, National University of Singapore. Built with the <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'mumbai',
            alignment: 'left',
            hidden: false,
            title: 'Mumbai',
            description: "Mumbai is India's financial capital. The Reserve Bank of India sits here, along with both national stock exchanges, the head offices of much of the country's corporate sector, and its film industry. Around twenty million people live in the metropolitan region, on a strip of land narrow enough to cross on foot in most places. Neither the wealth nor the crowding is accidental, and both begin with the same two facts. The land was manufactured, joined out of seven islands over roughly two centuries of causeway and infill. And the people came, in their hundreds of thousands, drawn to work on that new ground. Everything in this story sits on made land, built for people who arrived to make something on it.",
            legend: [],
            location: {
                center: [72.855, 19.050],
                zoom: 10.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'reclaimed-land', opacity: 0 },
                { layer: 'seven-islands', opacity: 0 },
                { layer: 'mills-of-girangaon', opacity: 0 },
                { layer: 'bdd-chawls', opacity: 0 },
                { layer: 'bdd-chawls-worli', opacity: 0 },
                { layer: 'redevelopment-project-plan', opacity: 0 }
            ],
            onChapterExit: []
        },

        {
            id: 'islands',
            alignment: 'left',
            hidden: false,
            title: 'Seven islands, one landmass',
            description: 'Until the eighteenth century this was an archipelago. Colaba, Old Woman\'s Island, Bombay, Mazagaon, Parel, Worli and Mahim sat separated by tidal creeks and marsh that flooded twice a day. Joining them took roughly two centuries of causeway and infill. The Hornby Vellard closed the Great Breach at Worli in 1784 and drained over seven hundred acres. The Colaba Causeway followed in 1838, the Mahim Causeway in 1845. By the 1840s the seven were one.',
            legend: [
                { heading: 'Year joined to the rest' },
                { color: '#cef8b9', label: '1661, Isle of Bombay' },
                { color: '#5fab3f', label: '1784, Worli' },
                { color: '#54a132', label: '1803, Mazagaon and Parel' },
                { color: '#308009', label: "1838, Colaba and Old Woman's Island" },
                { color: '#297901', label: '1845, Mahim' },
                { heading: 'Made ground' },
                { color: 'hsl(106, 50%, 68%)', label: 'Reclaimed between the islands' }
            ],
            location: {
                center: [72.835, 18.975],
                zoom: 11.7,
                pitch: 0,
                bearing: 0,
                speed: 0.6,
                curve: 1.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'reclaimed-land', opacity: 0.75, duration: 1500 },
                { layer: 'seven-islands', opacity: 0.85, duration: 1500 }
            ],
            onChapterExit: [
                { layer: 'reclaimed-land', opacity: 0.15, duration: 1500 },
                { layer: 'seven-islands', opacity: 0.2, duration: 1500 }
            ]
        },

        {
            id: 'girangaon',
            alignment: 'right',
            hidden: false,
            title: 'Girangaon, the village of mills',
            description: 'The first cotton mill opened in 1854. Within fifty years there were dozens of them, clustered on the new ground at Parel, Lalbaug, Byculla and Worli. The district took the name Girangaon, the mill village, and at its height it employed around a quarter of a million people.<br><br>They had to live somewhere. From 1920 the Bombay Development Department built chawls to house them, roughly 207 blocks across four districts. The mills are shown here shaded by the size of their land, alongside the chawl districts they fed. Read the two together and the logic is plain: the housing follows the work, at the scale of a workforce rather than a family.<br><br>Mill size is worth attending to because the land is what survives the industry. These are compounds of two to eighteen hectares in the middle of the city, and when the mills closed it was their footprints, not their machinery, that became the asset. The deepest blue holds the most ground.<br><br>The chawl districts are shaded by how many blocks each holds. Worli has 121, more than twice any other site. Naigaon has 42, N M Joshi Marg 32, Sewri 12.<br><br><em>Mill footprints are measured from traced boundaries and are indicative rather than surveyed.</em>',
            legend: [
                { heading: 'Mill footprint, hectares' },
                { gradient: ['#9ae2ef', '#77b8ca', '#65a5b8', '#5490a6', '#316e87'], min: '2 ha', max: '14 ha' },
                { heading: 'Chawl blocks per district' },
                { color: '#f8ddaf', label: '12, Sewri' },
                { color: '#eb975c', label: '32, N M Joshi Marg' },
                { color: '#e8894c', label: '42, Naigaon' },
                { color: '#d25304', label: '121, Worli' }
            ],
            location: {
                center: [72.834, 19.000],
                zoom: 13.1,
                pitch: 0,
                bearing: 0,
                speed: 0.6,
                curve: 1.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'reclaimed-land', opacity: 0.1, duration: 1500 },
                { layer: 'seven-islands', opacity: 0.1, duration: 1500 },
                { layer: 'mills-of-girangaon', opacity: 0.9, duration: 1500 },
                { layer: 'bdd-chawls', opacity: 0.8, duration: 1500 }
            ],
            onChapterExit: [
                { layer: 'reclaimed-land', opacity: 0, duration: 1000 },
                { layer: 'seven-islands', opacity: 0, duration: 1000 },
                { layer: 'mills-of-girangaon', opacity: 0.2, duration: 1500 },
                { layer: 'bdd-chawls', opacity: 0.15, duration: 1500 }
            ]
        },

        {
            id: 'worli-chawls',
            alignment: 'right',
            hidden: false,
            title: 'The BDD chawls at Worli',
            description: 'The site comprises blocks of three storeys, each floor containing twenty rooms disposed along a single shared corridor. Replicated across the site, this arrangement houses 9,689 households.<br><br>The scheme is organised through repetition rather than composition. Its governing unit is the room rather than the dwelling or the street, and the blocks are set out in parallel rows at intervals determined by requirements for light and ventilation. The plan establishes no hierarchy: there is no centre, no perimeter condition, and no device by which one block is differentiated from another. Standardisation of this order is more usefully understood as an administrative technique than an architectural one. The drawings specify quantity, dimension and spacing, and remain silent on the attributes that would render one address distinguishable from the next. The variable the drawings could not account for is time. <br><br> A substantial proportion of households have occupied the same rooms for seventy years or more, in many cases across three or four generations. Occupancy of this duration produces conditions that no plan can anticipate: relations of familiarity and obligation between households, established patterns of mutual dependence, and a body of social practice specific to this site rather than imported into it. Uniformity of built form has, over that period, come to conceal a considerable degree of social particularity. These conditions are absent from every layer presented on this map. Outlines can be traced, storeys enumerated and households counted. The relations accumulated between them across seven decades are recorded nowhere, and that absence is consequential, since a redevelopment proposal can be prepared, assessed and approved on the basis of what the record contains.',
            legend: [
                { color: 'hsl(0, 0%, 100%)', label: 'BDD chawl blocks' },
                { color: '#d25304', label: 'Extent of the Worli chawl district' }
            ],
            location: {
                center: [72.8214, 19.0018],
                zoom: 15.2,
                pitch: 35,
                bearing: 0,
                speed: 0.5,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'mills-of-girangaon', opacity: 0, duration: 1000 },
                { layer: 'bdd-chawls', opacity: 0.1, duration: 1500 },
                { layer: 'bdd-chawls-worli', opacity: 0.95, duration: 1500 }
            ],
            onChapterExit: [
                { layer: 'bdd-chawls-worli', opacity: 0.5, duration: 1500 }
            ]
        },

        {
            id: 'redevelopment',
            alignment: 'left',
            hidden: false,
            title: 'What replaces them',
            image: './images/worli-01.jpg',
            description: 'The scheme that replaces them comprises thirty four rehabilitation towers of forty storeys, ten sale towers of sixty six, five amenity buildings accommodating a school, a hospital, a gymnasium and public works offices, a commercial tower of twenty nine storeys, and a police garage. The rehousing is achieved by stacking: a population previously distributed across a hundred and twenty one low blocks is redistributed into a smaller number of vertical structures, and the two tenures are separated into distinct towers rather than mixed within them. Stacking releases a considerable quantity of ground. That ground is not returned to the residents as shared space. It is allocated principally to vehicular access, parking, service provision and the setbacks the tower typology requires, which is to say it is converted from occupiable space into infrastructure.' +
                '<br><br><img src="./images/worli-02.jpg" style="width:100%;"><em>The ground between two chawl blocks. A spacing originally established for light and ventilation produced a residual space that residents appropriated for other purposes: cricket in the afternoons, gatherings that formed and dissolved over the course of a day, and festivals observed at the scale of the entire chawl rather than the individual household. In the replacement scheme the equivalent dimension is determined by vehicle turning radii and the widths required for pedestrian egress. The space persists as access. What it will no longer support is occupation. Image Credit: Author</em>' +
                '<br><br><img src="./images/worli-03.jpg" style="width:100%;"><em>The shared corridor. With twenty rooms opening onto a single deck, domestic activity extended past the threshold as a matter of routine, and the corridor functioned as an extension of the room rather than as a route towards it. The towers substitute an internal lobby serving a small number of flats per floor, dimensioned to lift capacity and fire regulation. The reduction is not only one of area. It is a reduction in the number of households that the space places in daily contact with one another. Image Credit: Author</em>',
            legend: [
                { heading: 'Floors' },
                { color: '#1b3e88', label: '66, free sale towers' },
                { color: '#df68cb', label: '40, rehabilitation towers' },
                { color: '#6390e3', label: '29, commercial building' },
                { color: '#99eabf', label: '3, amenities' },
                { color: '#ff8080', label: '1, police garage' },
                { heading: 'Existing' },
                { color: 'hsl(0, 0%, 100%)', label: 'Chawls still standing' }
            ],
            location: {
                center: [72.8214, 19.0018],
                zoom: 15.4,
                pitch: 60,
                bearing: 30,
                speed: 0.4,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                { layer: 'bdd-chawls-worli', opacity: 0.45, duration: 1500 },
                { layer: 'redevelopment-project-plan', opacity: 0.95, duration: 2000 }
            ],
            onChapterExit: []
        }
    ]
};
