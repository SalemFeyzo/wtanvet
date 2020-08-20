import { v4 as uuidv4 } from 'uuid';

export const products = [
  {
    id: '1',
    name: 'المادة انرو هوم1',
    pic: 'unisolcfort',
    category: '',
    subCategory: '',
    content: 'كل 100 مل تحتوي ع انروفلوكساسين 10 غرام - حوامل حتى 100 مل',
    indications:
      'أنروتريل جكت يستعمل لعلاج التهابات الجهاز التنفسي و الرئـة و التهــــــاب الضــــرع احتبـاس الـمشـيمة , التهـاب الرحــم, التـهــاب الأمـعـــاء. التهــاب الأذن ,الجلـد, الالتهابـات الإنتانيـة او الجـروح عند الأبقار والجمــــال و الأغــــنـام والــــمـــــاعـز والــــكــــلاب والقـــطـــــط .',
    poultry:
      'ضد المايكوبلازما والتهابات الفراغات الهوائية المعقـدة, التهـــاب المفــاصل, الســــالمونيـــلا, كــــوريـــزا, كــولـيــرا الطيــور',
    usage: {
      howToUse: 'يعطى عن طريق  العضلي و تحت الجلد ',
      cows: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
      camels: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
      sheeps: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
      goats: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
    },
    warning:
      'لا يستخدم مع مضادات الماكروليدات والتتراسايكلين, البيض المنتج خلال الـمعالجة لايستهلك من قبل الانسان',
    period: 'اللحـم والحليـب : 7 أيام',
    packageType: 'عبوة زجاجية سعة 100 مل. رج العبوة جيدا قبل الاستعمال',
    preservation:
      'في مكان بارد وجاف بعيدا عن الضوء وبدرجة حرارة بين 15 - 25  درجة مئوية',
  },

  {
    id: '2',
    name: 'المادة انرو هوم2',
    pic: 'unisolcfort',
    category: '',
    subCategory: '',
    content: 'كل 100 مل تحتوي ع انروفلوكساسين 10 غرام - حوامل حتى 100 مل',
    indications:
      'أنروتريل جكت يستعمل لعلاج التهابات الجهاز التنفسي و الرئـة و التهــــــاب الضــــرع احتبـاس الـمشـيمة , التهـاب الرحــم, التـهــاب الأمـعـــاء. التهــاب الأذن ,الجلـد, الالتهابـات الإنتانيـة او الجـروح عند الأبقار والجمــــال و الأغــــنـام والــــمـــــاعـز والــــكــــلاب والقـــطـــــط .',
    poultry:
      'ضد المايكوبلازما والتهابات الفراغات الهوائية المعقـدة, التهـــاب المفــاصل, الســــالمونيـــلا, كــــوريـــزا, كــولـيــرا الطيــور',
    usage: {
      howToUse: 'يعطى عن طريق  العضلي و تحت الجلد ',
      cows: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
      camels: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
      sheeps: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
      goats: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
    },
    warning:
      'لا يستخدم مع مضادات الماكروليدات والتتراسايكلين, البيض المنتج خلال الـمعالجة لايستهلك من قبل الانسان',
    period: 'اللحـم والحليـب : 7 أيام',
    packageType: 'عبوة زجاجية سعة 100 مل. رج العبوة جيدا قبل الاستعمال',
    preservation:
      'في مكان بارد وجاف بعيدا عن الضوء وبدرجة حرارة بين 15 - 25  درجة مئوية',
  },

  {
    id: '3',
    name: 'المادة انرو هوم3',
    pic: 'unisolcfort',
    category: '',
    subCategory: '',
    content: 'كل 100 مل تحتوي ع انروفلوكساسين 10 غرام - حوامل حتى 100 مل',
    indications:
      'أنروتريل جكت يستعمل لعلاج التهابات الجهاز التنفسي و الرئـة و التهــــــاب الضــــرع احتبـاس الـمشـيمة , التهـاب الرحــم, التـهــاب الأمـعـــاء. التهــاب الأذن ,الجلـد, الالتهابـات الإنتانيـة او الجـروح عند الأبقار والجمــــال و الأغــــنـام والــــمـــــاعـز والــــكــــلاب والقـــطـــــط .',
    poultry:
      'ضد المايكوبلازما والتهابات الفراغات الهوائية المعقـدة, التهـــاب المفــاصل, الســــالمونيـــلا, كــــوريـــزا, كــولـيــرا الطيــور',
    usage: {
      howToUse: 'يعطى عن طريق  العضلي و تحت الجلد ',
      cows: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
      camels: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
      sheeps: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
      goats: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
    },
    warning:
      'لا يستخدم مع مضادات الماكروليدات والتتراسايكلين, البيض المنتج خلال الـمعالجة لايستهلك من قبل الانسان',
    period: 'اللحـم والحليـب : 7 أيام',
    packageType: 'عبوة زجاجية سعة 100 مل. رج العبوة جيدا قبل الاستعمال',
    preservation:
      'في مكان بارد وجاف بعيدا عن الضوء وبدرجة حرارة بين 15 - 25  درجة مئوية',
  },

  {
    id: '4',
    name: 'سلفامايسين 3',
    pic: 'sulfamycin',
    category: '',
    subCategory: '',
    content:
      'كل بلعة وزن 7.5غ تحتوي على :  سلفاديازين	1.583	غ, سلفاميرازين	1.583	غ, سلفابيريدين	1.583	غ, ستربتومايسين	250	ملغ',
    indications:
      'أنروتريل جكت يستعمل لعلاج التهابات الجهاز التنفسي و الرئـة و التهــــــاب الضــــرع احتبـاس الـمشـيمة , التهـاب الرحــم, التـهــاب الأمـعـــاء. التهــاب الأذن ,الجلـد, الالتهابـات الإنتانيـة او الجـروح عند الأبقار والجمــــال و الأغــــنـام والــــمـــــاعـز والــــكــــلاب والقـــطـــــط .',
    poultry:
      'ضد المايكوبلازما والتهابات الفراغات الهوائية المعقـدة, التهـــاب المفــاصل, الســــالمونيـــلا, كــــوريـــزا, كــولـيــرا الطيــور',
    usage: {
      howToUse: 'يعطى عن طريق  العضلي و تحت الجلد ',
      cows: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
      camels: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
      sheeps: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
      goats: '0.1 مـل/2 كغ/ وزن حي من 1 – 3 أيام',
    },
    warning:
      'لا يستخدم مع مضادات الماكروليدات والتتراسايكلين, البيض المنتج خلال الـمعالجة لايستهلك من قبل الانسان',
    period: 'اللحـم والحليـب : 7 أيام',
    packageType: 'عبوة زجاجية سعة 100 مل. رج العبوة جيدا قبل الاستعمال',
    preservation:
      'في مكان بارد وجاف بعيدا عن الضوء وبدرجة حرارة بين 15 - 25  درجة مئوية',
  },
];
