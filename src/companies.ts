export class Company {
    constructor(
        public nid: number,
        public title: string,
        public description: string,
        public city: string,
        public logo: string,
        public events: Event[]
    ) {}    
}

export class Event {
    constructor(
        event_id: number,
        event_title: string,
        event_description: string,
        event_date: string,
        event_logo: string,
        organizer: number 
    ){}
}

    export const COMPANIES: Company[] = [
        {"nid":69,
        "title":"Leuschke Group",
        "description":"Eget nunc lobortis mattis aliquam faucibus purus in. Enim lobortis scelerisque fermentum dui faucibus. Dolor morbi non arcu risus quis varius. Arcu felis bibendum ut tristique et. Nam aliquam sem et tortor consequat id porta nibh venenatis. Viverra accumsan in nisl nisi. Tempor id eu nisl nunc mi ipsum faucibus. Leo in vitae turpis massa sed. Viverra accumsan in nisl nisi. Leo urna molestie at elementum eu facilisis. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Viverra suspendisse potenti nullam ac tortor vitae. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Nunc aliquet bibendum enim facilisis gravida neque. Nunc eget lorem dolor sed. Fames ac turpis egestas sed tempus. Tellus mauris a diam maecenas sed enim ut sem. In egestas erat imperdiet sed euismod nisi porta lorem. Proin sed libero enim sed faucibus.",
        "city":"New Marleeside",
        "logo":"http://angular-test-backend.dev2.agiledrop.com/sites/default/files/2019-11/758-l.png",
        "events":[
            {
            "event_id":77,
            "event_title":"Angular Development",
            "event_description":"Nunc sed velit dignissim sodales ut eu sem. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. In dictum non consectetur a erat. Venenatis urna cursus eget nunc. Arcu risus quis varius quam. Sollicitudin tempor id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas. Porta nibh venenatis cras sed felis eget. Enim sed faucibus turpis in eu. Ac auctor augue mauris augue neque gravida in fermentum et. Integer malesuada nunc vel risus commodo viverra. Tincidunt eget nullam non nisi est sit. Suspendisse ultrices gravida dictum fusce ut. Id venenatis a condimentum vitae sapien pellentesque. In ornare quam viverra orci sagittis eu volutpat. Mus mauris vitae ultricies leo. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Amet facilisis magna etiam tempor orci eu lobortis. Mauris commodo quis imperdiet massa tincidunt nunc.",
            "event_logo":"http://angular-test-backend.dev2.agiledrop.com/sites/default/files/2019-11/random-logo-6.png",
            "event_date":"Wed, 05\/20\/2020 - 08:44",
            "organizer":69
            },
            {"event_id":75,
            "event_title":"Triglav Hiking",
            "event_description":"Eleifend mi in nulla posuere sollicitudin. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Donec ultrices tincidunt arcu non sodales. Donec adipiscing tristique risus nec feugiat in fermentum. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Nam aliquam sem et tortor consequat. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Facilisis volutpat est velit egestas dui id ornare. Curabitur vitae nunc sed velit dignissim sodales ut. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Praesent tristique magna sit amet purus.",
            "event_logo":"http://angular-test-backend.dev2.agiledrop.com/sites/default/files/2019-11/kisspng-logo-brand-random-icons-5ad592f6abd5c5.7372008015239462307039.jpg",
            "event_date":"Wed, 11\/22\/2023 - 08:44",
            "organizer":69},
            {"event_id":70,
            "event_title":"PHP Meetup",
            "event_description":"Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Vel pharetra vel turpis nunc eget. Donec ac odio tempor orci dapibus. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Feugiat in ante metus dictum at tempor commodo. Egestas dui id ornare arcu odio ut sem nulla pharetra. Sit amet massa vitae tortor condimentum. Eget nunc scelerisque viverra mauris. Donec et odio pellentesque diam volutpat. Dui faucibus in ornare quam. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.",
            "event_logo":"http://angular-test-backend.dev2.agiledrop.com/sites/default/files/2019-11/logo-2_21.jpg",
            "event_date":"Wed, 04\/08\/2020 - 11:44",
            "organizer":69}
        ]},
        {"nid":68,
        "title":"Kovacek LLC",
        "description":"Proin fermentum leo vel orci porta non pulvinar neque laoreet. Est lorem ipsum dolor sit amet consectetur adipiscing. Scelerisque varius morbi enim nunc faucibus a. At consectetur lorem donec massa sapien faucibus et molestie. Risus at ultrices mi tempus. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. At auctor urna nunc id cursus metus aliquam eleifend mi. Turpis egestas sed tempus urna. Imperdiet proin fermentum leo vel orci porta non. Aliquet risus feugiat in ante metus dictum at. Feugiat nisl pretium fusce id velit ut. Quis risus sed vulputate odio ut enim blandit. Vel quam elementum pulvinar etiam non quam. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Auctor augue mauris augue neque gravida.",
        "city":"Medhurstburgh",
        "logo":"http://angular-test-backend.dev2.agiledrop.com/sites/default/files/2019-11/random_logo_1.png",
        "events":[
            {"event_id":78,
            "event_title":"Nulla malesuada",
            "event_description":"Morbi non arcu risus quis. Dui ut ornare lectus sit. Eget velit aliquet sagittis id consectetur purus ut faucibus. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Consectetur adipiscing elit ut aliquam. Et tortor consequat id porta nibh venenatis cras sed felis. Velit sed ullamcorper morbi tincidunt. Ut tristique et egestas quis ipsum suspendisse ultrices. Ridiculus mus mauris vitae ultricies leo integer. Quis blandit turpis cursus in.",
            "event_logo":"http://angular-test-backend.dev2.agiledrop.com/sites/default/files/2019-11/MS-Vintage-Men-s-Crazy-Horse-Leather-Wallet-Credit-Card-ID-Cash-Holder-Wallet-Trifold-Zipper.jpg_220x220q90.jpg",
            "event_date":"Thu, 03\/18\/2021 - 08:44",
            "organizer":68},
            {"event_id":73,
            "event_title":"FIFA world cup",
            "event_description":"Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Vitae tempus quam pellentesque nec nam. Odio tempor orci dapibus ultrices in iaculis. Nulla facilisi nullam vehicula ipsum a arcu cursus. Eget nulla facilisi etiam dignissim. Sed cras ornare arcu dui vivamus. Pellentesque id nibh tortor id. Integer enim neque volutpat ac tincidunt vitae. Felis eget nunc lobortis mattis aliquam faucibus purus. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Facilisi morbi tempus iaculis urna id. Cursus risus at ultrices mi tempus.",
            "event_logo":"http://angular-test-backend.dev2.agiledrop.com/sites/default/files/2019-11/maxresdefault.jpg",
            "event_date":"Thu, 10\/22\/2020 - 08:44",
            "organizer":68},
            {"event_id":71,
            "event_title":"Bowling",
            "event_description":"Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Urna duis convallis convallis tellus id interdum velit laoreet. Nunc sed id semper risus in. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Tristique senectus et netus et malesuada fames ac turpis egestas. Ornare arcu odio ut sem nulla pharetra diam sit amet. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Nulla porttitor massa id neque. Elit duis tristique sollicitudin nibh. Sed egestas egestas fringilla phasellus faucibus. Sapien pellentesque habitant morbi tristique senectus et netus. Amet commodo nulla facilisi nullam vehicula ipsum a. Eu turpis egestas pretium aenean pharetra magna ac. Mi proin sed libero enim sed faucibus. Arcu non odio euismod lacinia.",
            "event_logo":"http://angular-test-backend.dev2.agiledrop.com/sites/default/files/2019-11/logo-w-txt-square-rounded-1900x1900-300dpi-txt_taller_spaced.png",
            "event_date":"Tue, 08\/06\/2019 - 08:44",
            "organizer":68}
        ],},
        {"nid":67,
        "title":"Waelchi and Sons",
        "description":"Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Lorem sed risus ultricies tristique nulla. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Faucibus purus in massa tempor nec feugiat nisl. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nunc sed id semper risus in hendrerit. Pretium vulputate sapien nec sagittis aliquam. Aliquam sem et tortor consequat id porta nibh. Aliquam vestibulum morbi blandit cursus risus at ultrices. Elit duis tristique sollicitudin nibh. Pellentesque nec nam aliquam sem et tortor. Ultricies integer quis auctor elit sed vulputate mi sit. Orci porta non pulvinar neque laoreet suspendisse interdum. Imperdiet proin fermentum leo vel. In fermentum et sollicitudin ac orci phasellus egestas. Sed euismod nisi porta lorem mollis aliquam. Sit amet venenatis urna cursus eget nunc.",
        "city":"West Wall",
        "logo":"http://angular-test-backend.dev2.agiledrop.com/sites/default/files/2019-11/12affc8078-450.png",
        "events":[
            {"event_id":76,
            "event_title":"Shopping Extravaganza",
            "event_description":"Nulla malesuada pellentesque elit eget. Ac ut consequat semper viverra nam libero justo laoreet. Ultrices dui sapien eget mi proin. Dolor sed viverra ipsum nunc aliquet bibendum. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Viverra nibh cras pulvinar mattis nunc. Nec nam aliquam sem et tortor consequat id porta. Diam quis enim lobortis scelerisque. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Pharetra vel turpis nunc eget lorem dolor sed. Eu lobortis elementum nibh tellus molestie nunc non. Orci sagittis eu volutpat odio facilisis.",
            "event_logo":"http://angular-test-backend.dev2.agiledrop.com/sites/default/files/2019-11/1f304832a7641406018942911c88ecaf.png",
            "event_date":"Tue, 03\/10\/2020 - 08:44",
            "organizer":67},
            {"event_id":74,
            "event_title":"Bird Watching",
            "event_description":"Nunc mattis enim ut tellus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Commodo elit at imperdiet dui. Scelerisque in dictum non consectetur a erat nam. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Vehicula ipsum a arcu cursus vitae. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Imperdiet proin fermentum leo vel orci. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Tristique risus nec feugiat in. Suspendisse faucibus interdum posuere lorem ipsum. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Interdum varius sit amet mattis vulputate. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Eget nullam non nisi est. Lectus sit amet est placerat in.",
            "event_logo":"http://angular-test-backend.dev2.agiledrop.com/sites/default/files/2019-11/bac5cc11231853.56278cd0168f1.jpg",
            "event_date":"Tue, 10\/01\/2019 - 08:44",
            "organizer":67},
            {"event_id":72,
            "event_title":"LAN Event",
            "event_description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Egestas diam in arcu cursus euismod quis viverra nibh. Enim ut tellus elementum sagittis vitae et. Id diam vel quam elementum pulvinar etiam non quam lacus. Convallis tellus id interdum velit. Tortor pretium viverra suspendisse potenti nullam ac tortor. Aliquet eget sit amet tellus cras adipiscing. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Aenean vel elit scelerisque mauris pellentesque pulvinar. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Lectus urna duis convallis convallis tellus id interdum velit. Felis imperdiet proin fermentum leo. Vitae congue mauris rhoncus aenean vel. Vel turpis nunc eget lorem.",
            "event_logo":"http://angular-test-backend.dev2.agiledrop.com/sites/default/files/2019-11/d33bfd4ad2-450.png",
            "event_date":"Wed, 12\/18\/2019 - 08:44",
            "organizer":67} 
        ]
    }]
    