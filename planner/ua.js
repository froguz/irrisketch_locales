this.LNG = {
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //UNITS---------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    units: {
        m: "м",
        cm: "см",
        mm: "мм",
        ft: "'",
        in: '"',
        sqm: "м²",
        acre: "акр",
        hectare: "га",
        sqft: "фут²",
        bar: "бар",
        kpa: "кПа",
        atm: "атм",
        mH2O: "м.вод.ст",
        psi: "фунт/дюйм²",
        l: "л",
        m3: "м³",
        USg: "гал",
        lpm: "л/хв",
        lph: "л/год",
        m3h: "м³/год",
        USgpm: "гал/хв",
        USgph: "гал/год",
        deg: "°",
        pcs: "шт",
        pcsDot: "шт.",
        percent: "%",
        in_Alt: "д.",
        mps: "м/с",
        kph: "км/год",
        degreesCentigrade: "°C",
        mmph: "мм/год",
        inph: "дюйм/год"
    },
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //DRAWING TOOLS-------------------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    drawing: {
        autoDrawer: "Авто вибір",
        chooseSprinkler: "Виберіть форсунку:",
        auto: "Авто-вибір",
        waterSource2row: ["Водо-", "забір"],
        setLineLength: "Вкажіть довжину лінії (мм):",
        setPressure: "Вкажіть очікуваний динамічний тиск на форсунках (бар):",
        setMaxFlow: "Вкажіть граничний розхід води (л/хв):",
        controllerShort: "К",
        sensorShort: "Д",
        action_activateEraser: "Стирати",
        action_deactivateEraser: "Малювати",
        action_boolUnite: "Додавання",
        action_boolIntersect: "Перетин",
        action_boolSubtract: "Віднімання",
        action_boolExclude: "Вилучення",
        action_changeSprayBody: "Змінити корпус",
        action_changeVariant: "Змінити вид",
        action_changeImgVariant: "Змінити вид",
        action_changeType: "Змінити тип",
        action_addConsumers: "Додати споживачів",
        action_drawBranches: "Додати лінії",
        action_editLine: "Редагувати",
        action_drawCircles: "Малювати кола",
        action_detachAll: "Видалити всі підключення",
        action_drawBrush: "Малювати",
        action_editBrush: "Редагувати",
        action_changeBrushSize: "Розмір пензля",
        action_booleans: "Булеві операції",
        action_intoPoly: "Перетворити на полігон",
        action_intoBrush: "Перетворити на пензель",
        action_activateRotation: "Обертати",
        action_deactivateRotation: "Не обертати",
        action_markZones: "Кольорове маркування зон",
        action_unmarkZones: "Відключити маркування",
        action_sprNames: "Позначити зрошувачі",
        action_noSprNames: "Прибрати позначення",
        action_lockItem: "Заблокувати",
        action_unlockItem: "Розблокувати",
        Circle: "Коло",
        Triangle: "Трикутник",
        BushForm: "Кущі",
		BushForm1: "Кущі 1",
		BushForm2: "Кущі 2",
		BushForm3: "Кущі 3",
        Square: "Квадрат",
        noShadow: "Ні",
        standardShadow: "Стандарт",
        normalSizeSide: "Нормально",
        invertedSizeSide: "Інверсія",
        strMiter: "Скіс",
        strRound: "Круглий",
        strBevel: "Фаска",
        strSquare: "Квадрат",
        strButt: "Стик",
        FWnormal: "Нормальний",
        FWbold: "Жирний",
        FWitalic: "Курсив",
        FWbolditalic: "Курсив Жирний",
        FJleft: "Ліво",
        FJright: "Право",
        FJcenter: "Центр",
        rzwHeight: "Висота"
    },
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //DRAWER HELPER-------------------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    interface: {
        //------------------------------------------------------------
        //-------------------TOOL NAMES-------------------------------
        //------------------------------------------------------------
        multiSelector: "Вибір елементів",
        //----Drawing
        selectPoly: "Нема вибраних елементів",
        //----Sprinkling
        selectSprink: "Ні",
        lpNozzler: "Підключення споживачів води",
        dl16CircDrawer: "Пристрій кругових обводів 16мм",
        dl16sDrawer: "Пристрій крапельного покриття 16мм",
        dl17CircDrawer: "Пристрій кругових обводів 17мм",
        dl17sDrawer: "Пристрій крапельного покриття 17мм",
        //------------------------------------------------------------
        //-------------------VALUES-----------------------------------
        //------------------------------------------------------------
        //Values
        rulerLength: "Загальна довжина",
        type: "Тип",
        variant: "Варіант",
        area: "Площа",
        perimeter: "Периметр",
        curveLength: "Довжина",
        treeDiameter: "Діаметр крони",
        bushDiameter: "Діаметр куща",
        nozTypes: "Можливі варіанти",
        nozType: "Тип",
        sprBod: "Корпус",
        rad: 'Радіус',
        angle: 'Сектор',
        reducedBy: 'Регулювання',
        consump: 'Розхід',
        pressure: 'Тиск',
        coverSize: 'Покриття',
        maxFlow: 'Максимальний розхід',
        pipesNum: "Підключено труб",
        pipeType: "Тип",
        pipeLength: "Довжина",
        wireLength: "Довжина",
        valvesManifNum: "Розп. гребінок",
        valvesNum: "Клапанів",
        propDiam: "Оптимальний діаметр труби",
        curDiam: "Малюємий діаметр",
        outsNum: "Споживачі",
        flow: "Розхід води",
        precipRate: "Кількість опадів",
        totalPrecipArea: "Площина зрошення",
        precipRateShort: "Опади",
        coveredArea: "Покриття",
        dripsNum: "Підключено крапельних ліній",
        dripType: "Тип краплі",
        dripRowsStep: "Крок розкладання",
        dripRowsAngle: "Кут розкладання",
        cntrType: "Тип контролера",
        sensType: "Тип датчика",
        zonesNum: "Зон під керуванням",
        trenchWidth: "Ширина",
        trenchDepth: "Глибина",
        trenchVolume: "Об'єм",
        insetDiam: "Діаметр",
        insetLength: "Довжина",
        insetVar: "Матеріал",
        itemsCount: "К-сть",
        insetDepth: "Глибина",
        zoneName: "Назва зони",
        itemAlias: "Назва",
        //MULTISELECTOR
        itemsSelected: "Вибрано",
        totalArea: "Загальна площа",
        totalPerimeter: "Загальний периметр",
        totalLength: "Загальна довжина",
        totalVolume: "Загальний об'єм",
        totalConsumption: "Загальне водоспоживання",
        //------------------------------------------------------------
        //-------------------STATUSES---------------------------------
        //------------------------------------------------------------
        //Stauses
        isSelfCrossing_true: "Некоректний полігон",
        isSelfCrossing_false: "Коректний полігон",
        isConnected_true: "Підключено",
        isConnected_false: "Не підключено",
        isWired_true: "Підведено",
        isWired_false: "Не підведено",
        isDripZone_true: "Крапельна зона",
        isDripZone_false: "",
        isSprinklerZone_true: "Зона зрошування",
        isSprinklerZone_false: "",
        isOverloaded_true: "ПЕРЕЗАПУСК!!!",
        isOverloaded_false: "",
        isUnderpressured_true: "Низький тиск",
        isUnderpressured_false: "",
        isOverpressured_true: "Високий тиск",
        isOverpressured_false: "",
        isLocked_true: "Заблоковано",
        isLocked_false: "",
        //------------------------------------------------------------
        //-------------------CLASSES,SERIES,SUBSERIES etc.------------
        //------------------------------------------------------------
        "Stainless steel": "Нержавіюча сталь",
        "Plastic": "Пластик",
        "MPR Nozzles": "MPR форсунки",
        "Rotary Nozzles": "Ротаторні форсунки",
        Nozzles: "Форсунки",
        "Bubbler nozzles": "Форсунки-баблери",
        "Multi-stream": "Багатоструменеві",
        "Dual-stream": "Двохструменеві",
        "Stream Nozzles": "Струменеві форсунки",
        "Short Radius Nozzles": "Форсунки ближньої дії",
        "Pressure compensating": "Форсунки з компенсаторами тиску",
        "Adjustable flood": "Регульовані",
        Adjustable: "Регульовані",
        Fixed: "Фіксовані",
        "Fixed Arc": "Фіксований сектор",
        "Strip Pattern": "Прямокутний сектор",
        "Drip line": "Крапельна лінія",
        "Drip cover": "Крапельне покриття",
        "16mm": "16мм",
        "17mm": "17мм",
        "emitter": "З крапельницями",
        "noemitter": "Без крапельниць",
        "Root zone watering": "Прикореневий полив",
        Lateral: "Зона",
        Main: "Магістраль",
        hdpe: "ПНТ",
        Controller: "Контролер",
        Sensor: "Датчик",
        Wiring: "Провід",
        Surface: "Поверхня",
        Lawn: "Газон",
        Bed: "Клумба",
        Shrubs: "Кущі",
        Path: "Доріжка",
        Concrete: "Бетон",
        Sand: "Пісок",
        Water: "Вода",
        Bedding: "Відсипка",
        Flower: "Квіти",
        Herbal: "Трави",
        geographic: "Географічні",
        sizeMark: "Розмір",
        scalingBar: "Рорзмірна шкала",
        texts: "Текст",
        staticText: "Статичний текст",
        dynamicText: "Динамічний текст",
        stampText: "Текст штампу",
        stampTextDefault: "Текст",
        stampTextgr1: "Назва документу",
        stampTextgr2: "Адреса об'єкту",
        stampTextgr3: "Назва об'єкту/Вид робіт",
        stampTextgr4: "Назва креслення/елементів",
        stampTextgr9: "Назва організації",
        stampTextgr6t: "Стадія",
        stampTextgr7t: "Аркуш",
        stampTextgr8t: "Аркушів",
        stampTextgr6: "П",
        stampTextgr7: "1",
        stampTextgr8: "10",
        stampTextgr14t: "Зм.",
        stampTextgr15t: "Кільк.",
        stampTextgr16t: "Арк.",
        stampTextgr17t: "№ док. ",
        stampTextgr18t: "Підпис",
        stampTextgr19t: "Дата",
        stampTextgr20t: "Інв.№ спр.",
        stampTextgr21t: "Підп. і дата",
        stampTextgr22t: "Взам. інв.№",
        inserts: "Закладні",
        //------------------------------------------------------------
        //-------------------LAYERS MANIPULATOR-----------------------
        //------------------------------------------------------------
        showLM: "Показати конфігуратор шарів",
        hideLM: "Приховати конфігуратор шарів",
        //------------------------------------------------------------
        //-------------------SOME OTHER DETAILS-----------------------
        //------------------------------------------------------------
        noName: "Безіменний",
        //------------------------------------------------------------
        //-------------------AJAX LOADING STATUSES--------------------
        //------------------------------------------------------------
        beganExporting: "Експорт креслення",
        successExporting: "Успішно виконано",
        failExporting: "Помилка",
        failExportingLimitReached: "Перевищено ліміт <a target='_blank' href='/account/subscription'>пробної версії</a>",
        exportingLimit: "Ліміт: ",
        exportingLeft: "Залишилось сьогодні: ",
        pdfExportingPopUpBlocked: "Ваш браузер заблокував скачування файла. Необхідно дозволити 'Спливаючі вікна'",
        //------------------------------------------------------------
        //-------------------TOOLTIPS---------------------------------
        //------------------------------------------------------------
        tt_group: "Різьба штока",
        tt_group_MT: "ЗР",
        tt_group_FT: "ВР",
        tt_riserHeight: "Висота штока",
        tt_pressureReg: "Реле тиску",
        tt_checkValve: "(із зворотнім клапаном)",
        tt_home: "На початок",
        tt_prev: "Попередній",
        tt_next: "Наступний",
        tt_end: "В кінець",
        tt_add: "Додати",
        tt_clone: "Клонувати",
        tt_remove: "Видалити",
        tt_rename: "Змінити назву"
    },
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //LAYOUTER-------------------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    layouter: {
        //compass
        N: "Пн",
        S: "Пд",
        E: "Сх",
        W: "Зх",
        //conventions
        sprinklers: "Зрошувачі",
        dripStarts: "Старт-конектор",
        rzwLayer: "Прикориневе зрошення",
        dripLines: "Крапельна лінія",
        valvesLayer: "Розподільча гребенка",
        waterSources: "Джерело води",
        quickCoupLayer: "Гідрант",
        controllers: "Контролер",
        sensorsLayer: "Датчик",
        mainPipes: "Основна магістраль",
        lateralPipes: "Зональна магістраль",
        trenchesLayer: "Траншея",
        insetsLayer: "Закладні",
        wiresLayer: "Провід",
        senswiresLayer: "Провід датчика",
        surfaces: "Поверхні",
        ldItemsLayer: "Рослини",
        covers: "Зони покриття",
        nameplates: "Інформація про споживаців",
        oreolas: "Кольорове маркування",
        pipeInfo: "Інформація про троуби",
        lines: "Лінії",
        overlays: "Доповнення",
        stampLayer: "Рамка",
        stampTexts: "Текст штампу",
        //zonesTable
        zoneType: "Тип зони",
        color: "Колір",
        consumers: "Спожив.",
        waterFlow: "Розхід",
        sprinklerZone: "Зрошування",
        dripZone: "Крапельна",
        rzwZone: "Прикореневе зрошеування",
        emptyZone: "Без споживачів",
        specifyDiagonal: "Будь ласка вкажіть діагональ вашого монітора в дюймах",
        //sprinklersTable
        consType: "Тип",
        consName: "Назва",
        zoneNum: "Зона",
        sector: "Сектор",
        radius: "Радіус",
        reducedBy: "Регулювання",
        nozzle: "Форсунка",
        rotor: "Ротор",
        bubbler: "Баблер",
        bubblerNozzle: "Форсунка-баблер",
        //dripsTable
        catId: "Арт.№",
        brand: "Бренд",
        emitterStep: "Крок",
        emitterFlow: "Вилив",
        //layersManangerSpecific
        consumersGrp: "Водоспоживачі",
        nodesGrp: "Вузли системи",
        wiresGrp: "Електрика",
        pipesGrp: "Труби, шланги",
        landscapeGrp: "Ландшафт",
        allTogether: "Всі шари"
    },
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //OUTLAYER-------------------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    outlayer: {
        //tableHeaders
        numsign: "№",
		typeCol: "Тип",
        brand: "Бренд",
        catid: "Арт.№",
        title: "Найменування устаткування",
        units: "Од.вим",
        amount: "К-сть",
        //predetermined
        dripLine: "Крапельна лінія",
        dl16: "Крапельна лінія 16мм",
        dl17: "Крапельна лінія 17мм",
        dripStart: "Старт-конектор",
        ds16: "Крапельний старт-конектор 16мм",
        ds17: "Крапельний старт-конектор 17мм",
        manifold_no_lps_issue: "Відсутнє підключення зональних трубопроводів",
        manifold_no_mp_issue: "Відстутнє підключення до магістральної труби",
        manifold_no_wr_issue: "Відстутнє пілключення проводу керування",
        //nodes-----------------------------------
        sprinkler_unattached: "УВАГА!!! Присутні ЗРОШУВАЧІ, непідключені до латеральних трубопроводів",
        drip_unattached: "УВАГА!!! Присутні непідключені елементи КРАПЕЛЬНОГО ПОЛИВУ",
        mains_unattached: "УВАГА!!! Присутні непідключені МАГІСТРАЛЬНІ ТРУБОПРОВОДИ",
		mains_empty: "ВНИМАНИЕ!!! Присутні МАГІСТРАЛЬНІ трубопроводи без СПОЖИВАЧІВ",
        laterals_unattached: "УВАГА!!! Присутні непідключені ЗОНАЛЬНІ ТРУБОПРОВОДИ",
		laterals_empty: "УВАГА!!! Присутні ЗОНАЛЬНІ трубопроводи без СПОЖИВАЧІВ",
        rzw_unattached: "УВАГА!!! Присутні непідключені елементи СИСТЕМИ ПРИКОРНЕВОГО ПОЛИВУ",
        sensors_unattached: "УВАГА!!! Присутні непідключені ДАТЧИКИ",
        manifolds_unfinished: "УВАГА!!! Присутні незавершені РОЗПОДІЛЬЧІ ВУЗЛИ (для додаткової інформації наведіть курсор на інформаційні кола)",
        youCanSeeThemInTheDrawing: "Ви можете побачити кожен непідключений елемент на кресленні, натиснувши на зображення ока зліва в рядку елемента",
        sprinkler_nozzleMT: "Вузол зрошування (Форсунка з внутрішньою різьбою)",
        sprinkler_nozzleFT: "Вузол зрошування (Форсунка із зовншньою різьбою)",
        "sprinkler_rotor1/2F": "Вузол зрошування (Ротор) 1/2\"РВ",
        "sprinkler_rotor3/4F": "Вузол зрошування (Ротор) 3/4\"",
		"sprinkler_rotor1/2M": "Узел дождевания (Ротор) 1/2\"РЗ",
        "sprinkler_bubbler1/2F": "Вузол зрошування (Баблер)",
        sprinkler_bubblerNozzleMT: "Вузол зрошування (Форсунка-баблер з внутрішьою різьбою)",
        sprinkler_bubblerNozzleFT: "Вузол зрошування (Форсунка-баблер із зовнішньою різьбою)",
        dripIrrigation16: "Крапельний полив (16мм)",
        dripIrrigation17: "Крапельний полив (17мм)",
        rootZoneWatering: "Система прикореневого поливу",
        manifold: "Розпредільний вузол",
        automation: "Вузол автоматизації",
        mainPipes_hdpeSDR11: "Основна магістраль ПНТ SDR 11",
        mainPipes_hdpeSDR136: "Основна магістраль ПНТ SDR 13.6",
        mainPipes_hdpeSDR176: "Основна магістраль ПНТ SDR 17.6",
        lateralPipes_hdpeSDR11: "Зональна магістраль ПНТ SDR 11",
        lateralPipes_hdpeSDR136: "Зональна магістраль ПНТ SDR 13.6",
        lateralPipes_hdpeSDR176: "Зональна магістраль ПНТ SDR 17.6",
        mainPipes_hdpeSDR9: "Основна магістраль ПНТ SDR 9",
        mainPipes_hdpeSDR11: "Основна магістраль ПНТ SDR 11",
        mainPipes_hdpeSDR136: "Основна магістраль ПНТ SDR 13.6",
        mainPipes_hdpeSDR17: "Основна магістраль ПНТ SDR 17",
        mainPipes_hdpeSDR176: "Основна магістраль ПНТ SDR 17.6",
        lateralPipes_hdpeSDR9: "Зональна магістраль ПНТ SDR 9",
        lateralPipes_hdpeSDR11: "Зональна магістраль ПНТ SDR 11",
        lateralPipes_hdpeSDR136: "Зональна магістраль ПНТ SDR 13.6",
        lateralPipes_hdpeSDR17: "Зональна магістраль ПНТ SDR 17",
        lateralPipes_hdpeSDR176: "Зональна магістраль ПНТ SDR 17.6",
        wiring: "Провід керування",
        qcv: "Клапани швидкого доступу до води",
        fixedCntr: "фіксований",
        stand_aloneCntr: "автономний",
        modularCntr: "модульний",
        decoderCntr: "декодерний",
        inset: "Закладна деталь",
        insets: "Закладні деталі",
        //-----------------------------------------
        novar: "відстутні варіанти",
        choosevar: "оберіть",
        //element.types----------------------------
        nozzle: "Форсунка",
        rotor: "Роторна форсунка",
        rotorNozzle: "Форсунка ротора",
        bubbler: "Баблер",
        bubblerNozzle: "Форсунка-баблер",
        rzw: "Прикореневий полив",
        sprayBody: "Корпус зрошувача",
        outBarb: "Штуцер в зрошувач",
        flexPipe: "Гнучкий підвід",
        sj: "З'єднуюче коліно",
        inBarb: "Штуцер в трубу",
        midSprinkPipeFitting: "Врізний фітінг",
        endSprinkPipeFitting: "Кінцевий фітінг",
        midRZWPipeFitting: "Врізний фітінг",
        endRZWPipeFitting: "Кінцевий фітінг",
        dripPipe: "Крапельна труба",
        dripTeeFitting: "Трійник крапельний",
        dripCapFitting: "Заглушка крапельна",
        dripCouplingFitting: "З'єднання крапельне",
        dripElbowFitting: "Коліно крапельне",
        dripSpike: "Фіксатор крапельний",
        sprinklerZoneValve: "Клапан зрошування",
        emptyZoneValve: "Клапан без спож.",
        valveOutFitting: "Зональний фітінг",
        dripZoneValve: "Клапан крапельної зони",
        rzwZoneValve: "Клапан прикореневого поливу",
        pressureReg: "Регулятор тиску",
        controller: "Контролер",
        flowMeter: "Розходомір води",
        rainSensor: "Датчик дощу",
        soilSensor: "Датчик вологості",
        freezeSensor: "Датчик заморозків",
        windSensor: "Датчик вітру",
        solarSensor: "Датчик сонячної активності",
        flowSensor: "Датчик протоку",
        weatherStation: "Метеостанція",
        solarPanel: "Сонячна панель",
        mainPipe: "Основна магістраль",
        teeFitting: "Трійник",
        elbowFitting: "Коліно",
        reducerFitting: "Редуктор",
        lateralPipe: "Зональна труба",
        capFitting: "Заглушка",
        basicCable: "Звичайний кабель",
        basicWire: "Звичайний провід",
        sensorCable: "Провід датчика",
        qcPlastic: "Пластмасовий гідрант",
        qcMetal: "Металевий гідрант",
        //typesOfAcessories
        hdpeCOR: "Гофр. труба",
        expModule: "Модуль розширення",
        rzwSleeve: "Текстильний манжет",
        rwCap: "Кришка (технічно вода)",
        gutterMount: "Кріплення на жолоб",
        delayRelay: "Реле затримки",
        fctFlow: "Фітінг FCT",
        fctBspAdap: "Адаптер BSP - FCT",
        drainCheckValve: "Антидренажний клапан",
        rwId: "Позначка технічна вода",
        vpc: "Анти-вандальна кришка",
        inletFilter: "Вставний фільтр",
        wifiModule: "Модуль Wi-Fi",
        wallMount: "Настенне кріплення",
        rwsSock: "Текстильний манжет",
        rwsGrate: "Решітка (Технічна вода)",
        npCover: "Кришка (Технічна вода)",
        sprExt: "Шток-подовжувач",
        popUpToThread: "Адаптер зрошувача",
        valveBox: "Бокс з клапанами",
        valveBoxExt: "Розширення для к/боксу",
        qcPlasticKey: "Ключ для гідранта",
        qcMetalKey: "Ключ для гідранта",
        qcPlasticElbFit: "Кутовий фітінг",
        qcMetalElbFit: "Кутовий фітінг",
        qcMetalCapKey: "Ключ для кришки",
        insTape: "Ізострічка",
        wrConn: "З'єднувачі",
        shrinkTube: "Термоусадка",
        hcFrontPanel: "Передня панель",
        ball_valve: "Кран кульовий",
        thread_manifold: "Колектор",
        plastic_filter: "Фільтр пластмасовий",
        waterMeter: "Водомір",
        rfModule: "Радіо-модуль",
        largeAntenna: "Антена",
        wifiHub: "WiFi Хаб",
        handRemoteKit: "Набір дист. кер.",
        handRemote: "Дист. кер.",
        wifiBundleKit: "WiFi Набір",
        //typesOfFittings
        //drip
        barb_cap_8: "Заглушка \"Вісьмірка\"",
        barb_elbow_PP: "Коліно штуцерне",
        barb_tee_PPP: "Трійник штуцерний",
        barb_coupling_PP: "Штуцер",
        barb_cross_PPPP: "Хрестовина штуцерна",
        barb_cap_P: "Заглушка штуцерна",
        barb_coupling_PT: "Штуцер на різьбу",
        barb_tee_PTP: "Трійник штуцерний на різьбу",
        barb_valve_PT: "Кран штуц. на різьбу",
        barb_valve_PP: "Кран штуцерний",
        twlc_elbow_PP: "Коліно зажимне",
        twlc_tee_PPP: "Трійник зажимний",
        twlc_coupling_PP: "Муфта зажимна",
        twlc_cross_PPPP: "Хрестовина зажимна",
        twlc_cap_P: "Заглушка зажимна",
        twlc_coupling_PT: "Муфта зажимна на різьбу",
        twlc_tee_PTP: "Трійник зажимний на різьбу",
        twlc_valve_PT: "Кран зажимний на різьбу",
        twlc_valve_PP: "Кран зажимний",
        dl_valves: "Специальні клапани",
        //pipe
        compress_elbow_PT: "Коліно 90° труба-різьба компрес.",
        compress_coupling_PT: "Муфта труба-різьба компрес.",
        compress_tee_PTP: "Трійник труба-різьба компрес.",
        compress_cap_P: "Кінцева заглушка компрес.",
        compress_elbow_PP: "Коліно 90° компрес.",
        compress_coupling_PP: "Муфта компрес.",
        compress_reducer_PP: "Редукційна муфта компрес.",
        compress_tee_PPP: "Трійник компрес.",
        compress_cross_PPPP: "Хрестовина компрес.",
        compress_single_clamp_saddle: "Сідло",
        thread_nipple: "Ніпель різьбовий",
        thread_coupling: "Муфта різьбова",
        thread_mf_reducer: "Редуктор РЗ/РВ різьбовий",
        thread_mf_adaptor: "Адаптер РЗ/РВ різьбовий",
        thread_mf_bush: "Футорка РЗ/РВ різьбова",
        thread_tee: "Трійник РВ різьбовий",
        thread_elbow: "Коліно 90° РВ різьбовий",
        thread_mf_elbow: "Коліно 90° РЗ/РВ різьбовий",
        thread_cap: "Заглушка РВ різбюлва",
        thread_plug: "Заглушка РЗ різьбова",
        thread_union_nut: "Муфта роз'ємна",
        cable: "Кабель",
        wire: "Провід",
        //extendables
        dripStartAssembly: "Збірка старт-конектора",
        intakeAssembly: "Магістральні фітінги",
        offtakeAssembly: "Додаткові зональні фітінги",
        numofvalves: "К-сть клапанів: ",
        numofvalvesshort: "Зон: ",
        numofmanifs: "К-сть розп. узлів: ",
        intakePipeSize: "Розмір магістралі: ",
        valveBoxes: "Бокси з клапанами",
        valveAccessories: "Аксесуари для клапанів",
        oneValveAccessories: "Аксесуари для клапана",
        controllerAccessories: "Аксесуари для контролера",
        sensorAccessories: "Аксесуари для датчика",
        sprBodyAccessories: "Аксесуари для зрошувача",
        rzwAccessories: "Аксесуари для прикорневого поливу",
        pipeStartFittings: "Довільні фітінги магістралі",
        qcAccessories: "Аксесуари для водорозеток",
        wiringAccessories: "Аксесуари для электродротів",
        pipeSize: "Розмір труби: ",
        endOfPipe: "(Кінець труби)",
        midOfPipe: "(Врізка в трубу)",
        emptyRender: [
            "Відсутній контент для відображення",
            "Ви ще не завершили проектування жодного вузла системи автоматичного зрошування"
        ],
        serviceFail: [
            "Помилка зв'язку з сервером обробки специфікацій",
            "Будь ласка, спробуйте трохи пізніше, коли з'єднання буде відновлено",
            "Звертаємо вашу увагу на те, що всі ваші маніпуляції зі специфікаціями були збережені"
        ],
        serviceTrialExpired: [
            "Вибачте, але отримання специфікацій не доступно для Вашого облікового запису",
            "Це означає, що Ваш пробний період закінчився, і щоб продовжити використання сервісу",
            "<a href='/account/subscription'>Ви можете перейти на PRO Аккаунт</a>"
        ],
        serviceLimitReached: [
            "Ви перевищили денний ліміт виведення специфікацій для пробної версії",
            "Щоб зняти обмеження по кількості розрахунку специфікацій в день",
            "<a href='/account/subscription'>Ви можете перейти на PRO Аккаунт</a>"
        ],
        findInDrawing: "Вір на кресленні"
    },
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //DIALOGER-------------------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    dialoger: {
        MMMM: ["\x00", "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
        MMM: ["\x01", "Січ", "Лют", "Берез", "Квіт", "Трав", "Черв", "Лип", "Серп", "Верес", "Жовт", "Листоп", "Груд"],
        dddd: ["\x02", "Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
        ddd: ["\x03", "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        //buttonsCaps
        ok: "Ок",
        save: "Зберегти",
        apply: "Застосувати",
        defaults: "Стандартні",
        retry: "Повтор",
        finish: "Вийти",
        safeRestart: "Безпечний перезапуск",
        saveAndExit: "Зберегти і Вийти",
        exit: "Вийти",
        cancel: "Відміна",
        rename: "Переіменувати",
        idk: "Я не знаю",
        getFile: "Завантажити",
        reset: "Скидання",
        random: "Випадкові",
        //misc
        zoneNum: "Зона №",
        zonesColoring: "Кольорове маркування зон",
        coversColoured: "Розмітити покриття зрошувачів",
        dripsColoring: "Кольорове маркування крапельних ліній",
        //saveOflline
        saveOffline: [
            "З'єднання з сервером втрачено",
            "Але ви можете продовжувати працювати в режимі Оффлайн.",
            "Всі ваші збереження будуть проводитись локально, в папку `Завантаження` вашого браузера",
            "Коли з'явиться з'єднання ви зможете завантажити весь ваш прогрес на сервер"
        ],
        restartOffline: [
            "З'єднання з сервером втрачено",
            "Ваш проект був автоматично збережений.",
            "Ви зможете його знайти в папці `Завантаження` вашого інтернет браузера",
            "Якщо ви плануєте працювати в Оффлайн режимі часто, тоді скачайте спеціальну версію програми для роботи без інтернету"
        ],
        brokenSaving: [
            "Вибачте, щось пішло не так в процесі завантаження ...",
            "Дані Вашого проекту були якимось чином пошкоджені.",
            "Але не хвилюйтеся, ми все виправимо.",
            "Ваш проект буде позначений як 'Зламаний' в особистому кабінеті, поки ми не полагодимо його.",
            "Наш спеціаліст вже знає про це і найближчим часом усуне проблему."
        ],
        corruptedSavingFile: [
            "Вибачте, файл який ви хочете завантажити - не читається ...",
            "Але не хвилюйтеся, ми спробуємо це виправити.",
            "Все що вам необхідно зробити, це завантажити цей файл в форму у вашому особистому кабінеті.",
            "І тоді ми зможемо спробувати його відновити."
        ],
        ajaxReqFail: [
            "Вибачте, з'єднання з сервером втрачено ...",
            "Наразі нам не вдається завантажити Ваш проєкт",
            "Спробуйте повторити завантаження пізніше."
        ],
        critical: [
            "Вибачте, щось пішло не так ...",
            "Але немає приводу для занепокоєнь, ваш проект був збережений в безпечному режимі ..."
        ],
        fatal: [
            "Вибачте, сталася неочікувана помилка ...",
            "Будь ласка, допоможіть нам покращити наш сервіс. Опишіть після яких дій сталася ця помилка",
            "Опишіть дії, що привели до помилки тут"
        ],
        areYouSure: [
            "Ви збираєтеся закрити цей проєкт",
            "Всі незбережені дані будуть втрачені."
        ],
        pickAnotherImage: "Обрати інше",
        imageTooBig: [
            "Перевищено максимальний розмір зображення",
            "З метою оптимізації, максимальний розмір зображення обмежений 10 мегабайтами"
        ],
        notAnImage: [
            "Помилка: обрано неприйнятний формат файлу",
            "Прийнятні формати : .pdf .png, .jpg, .jpeg, .tiff, .gif, .bmp"
        ],
        goProTexts: [
            "Обмеження ПРОБНОЇ ВЕРСІЇ",
            "На жаль, дана дія недоступна в пробній версії"
        ],
        goPro: 'Придбати PRO-Версію',
        renameLayout: "Введіть назву",
        areYouSureDeleteLayout: [
            "Увага! Цю дію неможливо відмінити",
            "Ви впевнені, що хочете видалити креслення: ",
            "Видалити"
        ],
        setUnderlaySize: [
            "Вкажіть розмір лінії, яку ви тільки що намалювали",
            "Ви ввели неправильне число, спробуйте ще раз"
        ],
        setMonitorDiagonal: [
            "Вкажіть розмір діагоналі вашого монітора в дюймах",
            "Ви ввели неправильне число, спробуйте ще раз"
        ],
        getSpecsTable: [
            "Параметри виведення специфікації",
            "Групувати обладнання по ",
            "Вузлам", "Виробниках",
            "Зберегти як ",
            "XLSX", "ODS"
        ],
        saveSpecsVariant: [
            "Введите имя для сохраняемого варианта спецификации",
            "Смета №",
            "Сохранить",
            "Сохранение таблицы",
            "Успешно сохранено",
            "Ошибка сохранения"
        ],
        differentSprGroups: [
            "Неможливо підключити різні види споживачів на обрану трубу",
            "У відповідності зі стандартами проектування систем поливу, неприйнятно встановлювати на одну зону різні види водоспоживачів, це зроблено для забезпечення рівномірної кількості опадів в межах однієї зони"
        ],
        tooFarAwaySpr: [
            "Не вдалося підключити водоспоживача до труби",
            "Деякі водоспоживачі знаходяться занадто далеко від зазначеної вами труби. Ви можете встановити максимальну дистанцію підключення в меню налаштувань"
        ],
        outlayerConfig: [
            "Конфігурація списку обладнання"
        ],
        cL_alreadyConnected: [
            "Помилка з'єднання ліній",
            "Обидві лінії мають підключення"
        ],
        cL_segOnElem: [
            "Ошибка объединения линий",
            "Невозможно сделать соединение на точке с элементом"
        ],
        cL_strangeError: [
            "Помилка з'єднання ліній",
            "Вибачте ... з'єднання неможливе"
        ],
        cL_misgrouping: [
            "Помилка з'єднання ліній",
            "На даних лініях присутні водоспоживачі, які не рекомендовано підключати на одну зону поливу. Якщо ви все ж хочете їх підключити - включіть 'Небезпечний режим' груповання зрошувачів в панелі конфігурації проєкту"
        ],
        cL_valve: "Розподільчий вузол",
        cL_waterSource: "Джерело води",
        cL_dripStart: "Старт-конектор",
        cL_controller: "Контролер",
        cL_sensors: "Датчик навколишнього середовища",
        cL_valves: "Розподільчий вузол",
        cL_notSameVariant: [
            "Помилка з'єднання ліній",
            "Дані лінії мають різні типи",
            "Тип обраної лінії",
            "Тип лінії підключення"
        ],
        hasRestorableProject: [
            "Є незбережені дані для цього проєкту",
            "Ви можете відновити стан проєкту від"
        ],
        restoreProject: "Відновити",
        imageLost: [
            "Проблема із зображенням",
            "Вибачте, ми не можемо знайти на сервері зображення, вставлене в цей проект:"
        ],
        filterSelection_exclude: "Вилучити із виділеного",
        filterSelection_include: "Додати до виділеного",
        filterSelectionNames: {
            sprinklers: "Водоспоживачі",
            dripStarts: "Крапельні старти",
            rzwLayer: "Прикорневий полив",
            dripLines: "Крапельні лінії",
            valvesLayer: "Бокси з клапанами",
            waterSources: "Джерело води",
            controllers: "Контролери",
            sensorsLayer: "Датчики",
            mainPipes: "Магістральний трубопровід",
            lateralPipes: "Зональний трубопровід",
            trenchesLayer: "Траншї",
            insetsLayer: "Закладні",
            wiresLayer: "Провід керування",
            senswiresLayer: "Провід датчика",
            quickCoupLayer: "Гидранти",
            surfaces: "Полігони і лінії",
            ldItemsLayer: "Елементи ландшафу"
        },
        //SPRINKLER NODE CONFIGS
        sprinklerNode: "Вузол зрошувача",
        fcType: "Тип гнучкого з'єднання",
        sj: "Шарнірне коліно",
        flexPipeBarbs: "Гнучка труба і штуцекр",
        minFlexPipeLength: "Мінімальний відрізок гнучкої труби на вузол",
        midSprinkPipeFitting: "Врізний фітінг",
        endSprinkPipeFitting: "Кінцевий фітінг",
        single_clamp_saddle: "Сідло",
        tee_PTP: "Трійник з внутрішьою різьбою",
        elbow_PT: "Кут з внутрішньою різьбою",
        coupling_PT: "Муфта з внутрішньою різьбою",
        //MANIFOLD NODE CONFIGS
        manifoldNode: "Розподільчі вузли",
        valvesOutlay: "Позиції клапанів",
        fold: "Згорнуті",
        unfold: "Розгорнуті",
        //AUTOMATION NODE CONFIGS
        automationNode: "Вузли автоматизації",
        controllerModules: "Розширення для модульних контролерів вибираються:",
        autoModules: "Автоматично (оптимально)",
        userModules: "Вручну (как аксесуари)",
        //RZW NODE
        rzwNode: "Вузлол системи RWS/RZWS",
        midRZWPipeFitting: "Врізні фітінги",
        endRZWPipeFitting: "Кінцевий фітінг",
        //DRIP node
        dripNode: "Крапельний полив",
        dripConnectionType: "Тип з'єднувальних фітінгів",
        dripLengthPrecision: "Чисел після коми в довжині труби",
        dripTubingAddon: "Запас капельної труби",
        barb: "Штуцер",
        twistLock: "Накидна гайка",
        dripSpikesStep: "Крок тримачів крапельных ліній",
        dripCrossFittingAble: "Можливе використання хрестовини",
        pipesNode: "Трубопровід",
        hdpeConnectionType: "Тип з'єднання ПНТ труб",
        pipeAddon: "Запас труби для кожного діаметру",
        pipeLengthPrecision: "Чисел після коми в довжині труби",
        crossFittingAble: "Можливе використання хрестовини",
        compress: "Компресійні фітінги",
        wiringNode: "Електрокабеля",
        basicWiringMethod: "Тип кабеля керування",
        noAutoWiring: "Без автоматичного підрахування",
        separateCableToManifold: "Окремий кабель до кождої гребінки",
        separateWireToValve: "Окремий кабель до клапану і загальний до гребінки",
        maxCableCores: "Максимально кількість жил в багатожильному кабелі",
        verticalWiringAddon: "Вертикальний запас кабеля до контролеру",
        verticalSensWiringAddon: "Вертикальний запас проводу до датчика",
        wireAddon: "Запас кабеля для кожного типу",
        wireLengthPrecision: "Чисел після коми в довжині кабеля",
        //DRAWER CONFIG
        drawerConfig: [
            "Конфігурація проєкта"
        ],
        //SPRINKLER PRESSURE CONFIGS
        sprinklerConfig: "Зрошувачі",
        pressureDefinedBy: "Очікуваний тиск на зрошувачі",
        recommendedPressure: "Рекомендоване виробником",
        userPressure: "Задане користувачем",
        expPressure: "Вкажіть тиск на зрошувачі",
        sprinklerGroupMode: "Групування зрошувачів в зони",
        safeSprGroupMode: "Суворий режим (На одній зоні лише сумісні зрошувачі)",
        unsafeSprGroupMode: "Небезпечний режим (УВАГА! Можливе підключення несумісних водоспоживачів на одну зону. Використовуєте на свій страх і ризик)",
        //UNITS CONFIG
        unitsConfig: "Одиниці вимірювання",
        precisionStd: "Кількість чисел після коми",
        distanceUnits: "Відстань",
        distancePrecision: "Кількість чисел після коми",
        sprinklerDistUnits: "Радіус зрошувача",
        sprinklerDistPrecision: "Кількість чисел після коми",
        areaUnits: "Площа",
        areaPrecision: "Кількість чисел після коми",
        volumeUnits: "Об'єм",
        volumePrecision: "Кількість чисел після коми",
        waterFlowUnits: "Розхід води",
        waterFlowPrecision: "Кількість чисел після коми",
        pressureUnits: "Тиск",
        pressurePrecision: "Кількість чисел після коми",
        velocityUnits: "Швидкість",
        velocityPrecision: "Кількість чисел після коми",
        precipRateUnits: "Кількість опадів",
        precipRatePrecision: "Кількість чисел після коми",
        ft: "дюйм",
        ftin: "фут/дюйм",
        //UNITS CONFIG
        hydraConfig: "Гідравлічний розрахунок",
        waterTemp: "Температура води",
        maxFlowVelocity: "Максимальна швидкість протоку в трубі"
    }
};