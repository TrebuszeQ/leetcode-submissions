/**
 * In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
 * You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
 * The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
 * If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
 */

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

let matrixReshape = function(matrix, row, column) {
    const validator = row * column;
    let plain = [];

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            plain[plain.length] = matrix[i][j];    
        }
    }
    console.log(`plain length: ${mat.length}`);

    if(validator === plain.length) {
        let reshaped = [];
        for(i = 0, x = 0, y = 0; x < row; x++) {
            let reshapedColumn = [];
            y = 0;
            for(; y < column; y++, i++) {
                reshapedColumn[reshapedColumn.length] = plain[i];
            }
            console.log(`reshapedColumn: ${reshapedColumn}`);
            reshaped[x] = reshapedColumn;
        }
        console.log(`plain: ${plain}`);
        console.log(`reshaped: ${reshaped}`);
        return reshaped;
    } else
    {
        console.log('Not possible.');
        return matrix;
    }
}

//const mat = [[1,2], [3,4]], const r = 1, c = 4
//const mat = [[1,2], [3,4], [5,6]], const r = 2, c = 4
//const mat = [[1,2], [3,4], [5,6], [7,8]], r = 2, c = 4
//const mat = [[1,2]], r = 1, c = 1;
//const mat = [[575,-358,-664,-6,360,335,-606,-451,146,748,-631,272,470,-825,537,54,177,892,-478,235,152,-812,38,-639,-187,766,944,-269,-794,367,-442,-465,493,684,757,600,50,825,-871,-854,239,422,-5,51,-586,-565,1,678,901,290,-838,539,-566,549,997,612,555,646,303,-71,-63,730,-933,854,-50,345,937],[-273,-294,-634,-394,-535,454,873,384,351,688,-436,-416,-537,189,-82,-763,214,855,-37,937,21,204,-244,-492,448,583,-327,-1,-285,487,-598,976,367,-93,-175,409,593,364,853,-300,-488,490,425,626,-763,-24,104,939,-496,907,118,-392,-707,969,294,-320,-493,-720,922,-134,812,410,794,-707,-293,662,-114],[41,90,-908,706,224,-680,-606,-608,-802,694,-420,-495,207,111,-239,988,-362,52,758,103,-718,842,657,125,399,-849,-470,77,281,851,-765,-293,-782,319,-637,-554,66,-785,317,-656,764,-961,895,929,-959,605,5,707,319,-684,17,243,-621,-710,-697,-141,-119,-42,837,95,200,245,644,-218,417,-527,-878],[965,-865,246,-231,609,-894,-688,344,134,394,-230,-485,371,659,749,-354,399,-65,456,-708,40,-138,-707,-782,891,965,710,-15,-958,-404,975,947,269,-538,-46,696,532,560,-853,340,-2,-913,-63,156,-545,-851,-299,712,327,-70,592,-359,473,565,416,844,-116,-446,798,303,843,-97,-482,-366,267,-514,-666],[-169,-667,26,848,-205,-809,-912,-923,26,-325,-229,344,967,-84,84,-153,-762,71,542,827,796,88,-254,720,302,-534,-165,-685,339,212,196,409,-928,-338,665,192,-835,-218,-635,-452,-427,-389,-364,615,265,-129,575,-668,-266,786,125,95,-950,-752,-739,396,-230,-946,-579,-994,763,-824,-370,-451,521,-727,689],[-595,702,402,-47,147,148,-468,848,-866,517,589,-731,101,35,-925,-989,817,935,963,341,-807,890,-72,342,777,-185,-913,-151,-15,644,-459,-458,-135,292,-634,632,530,-293,-445,118,-434,-953,414,835,-435,-478,-848,649,-58,806,-19,-476,80,-71,-213,171,-242,702,-131,442,-586,-979,-417,640,-968,-357,-656],[89,612,-229,515,689,935,178,971,-924,-395,-386,244,644,-287,-713,-732,895,519,-346,-787,-203,59,-956,-368,398,-50,57,-55,-401,-313,-251,669,591,978,-426,-759,601,533,579,773,699,-596,999,304,-515,-350,-869,-664,-843,-794,459,983,-645,-415,675,-484,-672,-792,172,476,62,-866,-370,-741,108,-87,628],[-222,79,-827,-946,201,800,52,-874,38,-391,-677,-510,-947,-992,-528,-434,-685,951,278,-171,-308,3,-499,937,876,461,-482,751,517,926,501,-848,435,889,437,896,636,-315,-798,-221,858,588,-453,195,-414,-89,693,-662,-702,-772,890,-986,176,-463,-279,795,103,-182,86,-152,204,-15,889,188,-153,103,153],[339,109,-298,-372,-443,760,871,-298,843,594,-353,-217,21,121,46,-782,-623,-613,695,-190,193,538,-981,156,42,207,642,143,-814,830,506,575,-719,-977,-342,-962,-971,419,367,675,-139,-719,567,791,199,-613,-921,-871,649,831,-76,871,560,-429,846,631,116,-229,238,667,-249,277,-550,-364,-263,-513,-170],[475,913,-236,-124,-781,-70,-629,444,651,861,-502,581,902,-788,117,-239,466,969,-265,-279,770,-34,-797,-610,-768,235,-484,-683,605,89,435,-895,-376,-866,569,-777,-527,-706,407,287,-785,-385,526,-27,-855,-254,-401,541,-858,-184,-736,-469,854,-11,-34,264,208,772,761,554,670,-314,501,381,-563,-971,877],[705,-281,-112,-8,-37,200,-481,-772,-253,-445,-921,618,241,693,788,-56,-117,257,956,216,907,-839,-492,-87,-792,465,873,363,215,767,-353,799,-838,894,-440,210,-888,737,-123,-82,-475,80,-562,-675,-945,520,443,259,710,780,-442,696,261,835,-820,852,508,527,525,701,-494,585,-422,340,10,163,-416],[37,-141,-908,963,-230,-577,-279,-665,669,-81,-368,-634,-401,-572,-678,401,80,-400,-196,-743,344,122,-810,464,324,666,955,343,-779,-214,-33,642,-868,441,566,-202,-402,-52,-572,934,194,-998,-825,-407,-286,-709,324,318,776,-697,-606,426,812,-487,-854,229,-4,903,63,-557,743,-457,806,948,574,853,165],[2,-658,-194,374,401,186,367,192,247,-436,32,-346,630,918,140,939,415,-674,-516,715,777,-754,-53,-574,-919,-355,56,-326,-85,-858,343,856,333,402,609,-382,-441,-426,-17,26,-962,-331,623,-153,820,-452,37,-959,842,350,471,-311,-884,-55,525,868,-948,683,-708,238,-224,-770,496,932,-152,-982,636],[-485,48,6,-891,-990,479,964,367,19,676,343,733,-628,108,245,-271,979,84,-923,756,508,32,-188,-385,641,959,-844,-842,649,619,-656,-648,555,-485,439,509,250,970,840,-516,764,684,-72,778,-781,318,-749,-438,963,-284,-42,492,878,-20,545,-77,-552,-874,448,544,-483,-437,-116,-871,181,366,86],[419,-950,381,32,7,162,-283,153,30,-70,540,886,22,169,621,826,-322,-730,-57,921,518,-732,723,708,986,-766,680,231,744,513,371,624,-195,-906,-807,663,643,384,137,697,453,516,557,-812,-829,804,942,-265,-234,-717,889,146,-54,-595,-36,965,-936,923,-761,-229,636,-529,476,-92,-495,-407,-590],[-297,-261,673,-588,-217,372,-605,63,397,-294,-763,-565,-885,468,-169,777,384,103,86,-872,249,-103,-753,-816,725,-991,405,695,841,676,-168,694,-172,-876,24,964,844,-807,334,-323,928,-589,159,-483,845,-296,-596,-24,711,941,-537,214,-798,-452,-333,34,681,-169,-259,944,-971,-311,902,-466,231,-635,-982],[-897,-354,301,-522,-890,517,-515,112,-110,844,195,561,170,354,952,-207,-971,873,142,782,-278,507,-88,-563,-515,85,-10,-834,470,742,-698,-610,882,-137,635,-302,361,-74,255,-534,645,580,-789,-61,-588,482,111,240,345,-335,821,-688,-235,-726,813,325,599,-477,17,862,107,-973,-311,-702,143,-193,453],[-460,244,-260,-812,535,-300,-100,374,-249,799,-256,-907,698,-829,326,-926,-992,-266,-724,60,-542,822,-13,-294,-375,-1000,-414,-168,876,93,-64,-84,-439,-844,625,731,315,-526,155,-165,633,192,117,533,-21,226,531,-250,984,923,-317,489,939,97,-752,369,-2,654,-537,993,202,249,-654,-745,-650,-753,843],[-933,-821,-725,274,439,484,62,173,-36,563,-748,91,261,-539,405,564,-807,-730,380,-264,846,670,841,-799,104,-71,-679,-363,923,-806,142,481,-851,138,-666,965,810,188,688,360,-785,-737,428,-454,561,180,-128,-439,483,-668,-398,-966,-552,151,-967,-40,235,-356,-219,-5,-438,47,-828,-13,202,-141,-651],[-718,289,247,133,979,-679,147,-529,-362,-701,-273,858,-142,107,-749,-671,-711,-496,-292,-608,-430,-751,161,239,-426,-525,-673,-444,259,28,-422,-120,-136,44,494,-782,-186,137,36,17,820,-429,-428,782,-891,511,511,402,-117,-657,-163,57,-615,-69,964,971,433,-558,196,-30,951,543,343,-564,-842,173,55],[-950,587,401,-618,-145,874,-89,-727,807,882,-332,309,298,373,-964,-879,681,797,-534,346,-628,752,784,-414,-614,354,66,635,778,558,568,-99,383,666,-742,157,624,389,-521,-683,-961,-739,773,738,669,-528,-215,100,611,-649,244,742,610,509,763,-230,189,909,363,-451,-925,972,314,-364,197,118,-578],[58,-198,523,-939,-443,-501,-108,-875,643,-173,-527,-187,-452,602,153,-853,502,-677,-3,-774,842,-911,-345,-707,-391,-267,793,-88,778,481,-121,-808,344,-723,-488,-555,-400,713,-587,843,-845,715,982,499,-27,985,182,-324,544,-635,117,707,678,-955,537,558,-481,802,822,-20,-620,-646,359,-605,-612,-982,630],[-998,609,266,-850,-529,42,-867,-918,786,331,806,409,618,308,-274,449,-664,-289,-322,-823,70,592,905,539,-358,658,349,-870,-162,697,-188,181,-9,937,-77,563,448,294,555,-335,78,179,237,383,-373,210,-887,-182,349,-782,614,874,357,514,19,-37,-792,618,-904,402,-939,285,-892,-45,129,-413,290],[-79,291,735,-691,-919,372,-788,231,759,753,-573,-711,248,-899,-843,686,-881,804,260,-645,-373,-346,-168,302,-932,988,-233,-911,-611,623,338,-607,727,605,-591,-703,139,299,-187,429,-595,-417,347,-883,521,502,-655,-24,373,-483,36,-229,-549,-884,678,-503,-883,5,918,-516,582,271,-563,-807,721,569,295],[915,-579,-648,407,203,-761,447,-527,-215,-715,-890,-151,-825,-652,116,45,214,402,247,320,-964,-165,-578,-88,-414,657,356,-930,241,-910,-818,-698,-793,-635,227,-850,372,908,-177,-937,-762,985,524,-693,587,788,4,154,-214,-888,514,919,-231,-435,-316,432,-707,475,48,15,-517,-730,446,-413,671,-131,44],[147,-200,-768,-531,-344,-678,601,-874,-488,-798,-791,-461,735,245,-652,-717,896,712,639,679,620,197,-290,753,-219,166,-765,-810,-38,856,394,-544,-11,-292,126,381,-182,-357,408,-32,-152,-32,-809,-576,-28,-314,137,42,602,-538,-963,388,-123,459,-105,50,666,-812,160,570,-998,-351,691,-896,-512,-66,-14],[78,-226,-522,-302,-632,-442,514,474,-60,-849,-434,273,965,749,753,-507,637,534,-777,-663,812,26,61,-697,621,-402,268,140,-739,455,-55,-613,366,-399,-967,-974,-552,-394,-717,-592,528,-659,-444,904,301,-977,-480,23,-866,-377,-8,578,322,-443,-508,90,-348,-366,-105,-426,-355,-387,-201,538,650,738,165],[-108,-307,578,-717,4,-398,-438,210,399,727,-776,-854,-991,-836,-787,146,-726,540,353,-800,362,219,933,-98,-801,206,-217,594,-881,573,-588,-411,403,-768,751,308,-358,-367,15,-105,-260,527,571,559,-639,160,310,590,800,203,190,235,-112,747,-862,702,276,225,463,162,-96,-919,964,161,-789,653,251],[-15,598,463,678,-954,175,952,429,-273,-935,956,801,-602,349,783,-385,502,-12,918,831,-402,-22,-916,678,-748,-721,752,867,-116,998,992,584,73,315,-355,-521,-707,-795,-188,-736,109,245,264,95,-158,-56,97,688,227,-204,-314,310,722,899,250,954,624,657,913,-982,-365,-684,-179,-373,-385,-65,-553],[-566,-127,-816,-551,-437,957,952,-185,-511,843,691,-714,-800,-439,436,354,-551,-408,-236,595,-904,-464,-467,-523,433,-305,68,999,-647,-819,28,-518,-122,851,426,-652,-581,-178,-787,431,-284,855,674,-12,262,752,742,-96,386,642,-877,803,721,-53,-42,-192,399,-158,-646,-744,-759,-695,642,100,325,463,-607],[483,-950,935,-645,764,-338,376,393,-979,172,86,-136,639,-375,209,-203,-3,-964,441,-88,389,-960,-166,467,985,988,-36,-597,353,-681,653,-941,459,509,396,278,-379,57,-54,517,160,731,-237,214,898,541,-49,-378,-589,387,394,994,652,-409,563,-642,479,503,674,-546,-881,-652,289,-424,-873,324,-979],[-446,65,813,-452,809,554,-861,-32,620,-615,505,-163,-46,690,268,-443,-836,-696,-759,800,923,-726,-626,-466,-484,-60,-917,60,-32,-172,712,-218,883,-982,11,-910,810,183,513,-552,92,68,-90,961,944,-812,-658,80,-790,-595,648,-196,374,-567,-96,576,871,-319,650,490,650,-7,-537,148,-704,65,-531],[-599,958,-916,-831,40,-300,-66,-976,779,716,406,168,412,488,-134,-10,427,-482,-952,154,-695,-6,-182,942,-821,-765,893,-259,883,384,870,-664,433,129,323,-192,329,-656,-491,416,671,-744,749,-692,-431,419,-68,399,-583,361,-802,270,217,-757,14,371,904,-963,546,756,820,867,-411,299,-103,177,-325],[-624,10,-99,-890,-210,-762,-331,534,983,780,-314,393,-659,514,742,-434,-675,232,-806,999,499,-541,72,995,-839,850,535,591,-970,-963,-597,-777,-1000,933,187,197,713,-332,-88,682,-410,131,632,524,618,198,-754,568,895,-89,-235,780,-326,234,-113,-94,-22,-666,-964,950,753,928,569,623,851,560,-512],[489,629,963,977,-635,14,-826,-376,563,-641,-963,131,-80,-608,-992,-290,687,521,765,444,605,-626,687,-381,-56,-380,264,-551,-400,40,177,-828,760,-162,-919,265,-910,945,444,118,-135,-777,154,-292,-879,-354,-11,781,-998,-134,-212,578,-893,-110,-303,-248,934,120,-737,387,460,910,-86,-843,-371,827,506],[-142,-155,-975,-718,-603,-157,-604,-924,348,213,129,699,646,697,72,702,971,-706,299,122,-130,773,-433,493,717,775,951,-714,699,221,-574,-692,352,596,-229,35,-615,-536,-429,-416,-484,-557,133,668,255,-711,-981,273,665,-730,-700,30,-842,-908,229,228,17,533,-36,740,-172,-878,-158,-458,-903,-269,-840],[671,-802,34,545,-318,-739,651,584,450,-244,-392,-458,-220,-556,-330,987,-621,-912,299,877,-679,203,939,-208,-588,22,76,-669,-146,6,-319,350,-18,-335,896,689,-507,42,-809,-244,-265,511,744,854,-773,-563,-298,-493,345,-869,-834,438,177,941,803,3,9,-491,-900,28,175,768,-737,645,-234,540,-800],[-672,-648,922,-954,566,-391,933,-635,-663,485,772,-953,966,853,805,126,251,566,-2,276,560,953,-370,-232,-426,-852,339,-746,-100,-942,678,-262,436,-904,296,-629,645,846,-223,-223,801,803,41,-249,26,-55,-666,-598,-970,-689,-672,199,-5,901,846,426,801,-502,350,766,-936,-127,-137,-308,-611,269,825],[471,841,240,-978,440,-253,-486,497,-106,823,658,-360,-88,-357,110,-29,-446,3,-749,-29,254,-642,618,-619,-296,103,521,-522,-149,-597,972,471,583,557,-637,-538,-714,547,302,563,538,-756,471,3,537,-506,-19,118,713,-644,-294,-197,772,-925,566,-372,997,368,59,-15,424,320,-193,453,463,-205,423],[-926,7,320,-300,-420,255,956,-310,-459,-790,396,367,241,473,325,514,-666,-871,-126,137,-963,755,-365,-662,-672,490,-271,-621,-174,-715,898,945,-700,-347,-664,-145,366,488,-429,-570,881,210,360,-685,819,551,999,574,433,709,157,497,193,-583,-235,-417,-422,-617,-688,81,615,844,-834,413,892,-973,-68],[-870,766,-547,278,-525,-192,-243,-834,349,268,768,64,-680,-567,673,-199,181,-91,-777,207,736,-57,959,-684,-57,797,-239,372,755,-154,-346,-830,122,-893,74,-324,-313,227,291,534,969,650,-977,-631,-526,-620,-381,-537,201,-689,727,571,928,650,302,543,684,-643,150,472,352,687,-292,783,-891,913,617],[893,933,-556,341,-173,501,-367,361,-826,-99,822,613,225,-110,346,-429,45,345,-132,461,-621,-821,-744,542,709,266,-894,-555,147,-622,898,121,842,88,783,-325,953,229,939,-311,-480,-33,-175,253,233,-536,-26,464,587,-126,-318,256,-360,121,13,983,404,139,-859,928,-237,-859,-59,-116,957,209,-884],[-113,-325,-264,-207,-385,796,32,-782,-503,8,803,936,876,411,-333,778,-641,-207,819,-701,65,-67,60,-265,-839,-998,-918,-61,75,-840,-279,-728,-741,917,910,300,4,439,-892,544,454,-223,489,758,348,-897,-321,895,-965,760,862,-456,-254,-593,-383,317,122,518,191,685,432,-107,-374,-272,-61,263,272],[-482,-187,44,-538,-898,330,-590,-589,377,-194,-519,561,-884,-679,978,-508,-572,-382,810,699,92,516,-991,158,865,84,860,-930,-635,121,322,210,538,-263,238,-721,218,-317,265,-129,614,384,994,-41,752,927,995,986,108,357,725,541,163,-180,600,579,608,962,310,-249,359,-549,978,766,-10,953,-356],[609,-888,-980,478,-444,-170,854,895,-293,625,607,-745,-85,210,-425,-643,-509,981,145,-476,785,231,706,469,419,-286,-145,-852,-540,-573,429,-296,-798,-474,180,958,668,-99,-198,-180,-992,-628,-887,551,124,-38,-768,629,-814,-87,246,-36,852,-697,662,782,972,130,-192,854,15,-54,-987,996,576,-63,769],[131,-829,896,273,622,835,640,840,902,-575,-186,726,-591,-680,69,-217,-122,546,580,-802,433,-377,790,-379,-861,-932,974,-467,-714,-315,565,479,252,-489,163,-404,592,-610,214,-775,379,-50,984,298,453,44,71,-931,-140,-291,-805,-968,-603,656,-77,-295,246,482,452,-541,440,8,-683,-259,86,-294,-527],[-106,686,-949,815,564,-953,-169,297,508,31,-205,-646,689,442,215,78,-81,322,-524,-849,-797,180,-25,213,299,-981,-762,721,-534,725,-921,-239,-593,409,-741,-443,792,946,371,-679,-326,-12,-584,-785,64,-725,859,688,763,-539,174,736,-1,797,-525,-775,507,645,-164,-937,-56,-923,-88,-297,-784,-590,668],[-305,208,969,-252,-648,-178,-117,-68,392,-94,-400,-114,-65,-268,179,-656,-374,118,73,-895,548,526,-462,635,185,500,634,-880,-476,-470,-867,-421,-276,-577,-767,591,623,-372,649,-174,823,-433,-984,37,-84,-100,-638,-6,-690,423,-162,348,945,651,-718,-34,281,-470,-257,-294,522,951,-949,-640,605,-432,950],[305,-44,739,-572,906,908,542,-995,-774,565,-478,-430,843,34,383,-904,-616,622,728,817,-215,345,-519,-507,-329,-656,-240,393,-893,692,-976,126,241,-416,48,-784,-744,428,570,528,869,-719,-498,-872,816,-277,-613,215,464,-146,543,-117,701,-314,738,-359,40,769,-129,851,734,372,-60,388,-323,-496,194],[896,-910,-69,-396,204,-262,-245,306,480,-915,-536,917,491,411,-652,487,437,-107,314,611,94,-254,606,-123,237,156,-134,536,-947,-105,-344,-450,-473,995,-161,3,-226,388,624,274,604,916,873,314,-877,-148,-263,-432,487,-524,-498,805,-880,-717,278,736,-716,-18,530,989,-69,-214,-71,-460,209,402,-941],[-839,941,-346,-694,-322,-751,633,70,-335,772,-153,965,232,210,868,-625,-669,-721,-717,-270,131,-144,-658,-639,-669,-46,-759,-717,-327,79,966,-675,-464,600,504,264,-274,-988,-424,967,115,-602,-674,-193,896,165,-972,-507,-141,798,196,-714,-467,313,218,-566,902,-715,29,542,562,280,319,-150,-851,-447,453],[210,632,941,568,-802,633,608,182,349,-591,326,388,299,-92,-171,-813,-72,58,-740,678,200,-102,-258,-150,-301,497,293,678,263,695,472,218,-35,-989,-380,-968,822,-243,675,14,-592,903,-170,910,985,855,-247,502,-381,-999,-934,206,381,-424,523,313,-88,208,-186,94,-802,-386,198,-648,-859,-834,-145],[146,776,-299,965,224,-236,878,791,-507,-488,961,-490,601,-145,-543,637,91,936,-60,287,757,201,-680,866,-746,137,407,207,684,182,-386,-598,202,-142,936,361,509,-493,-365,-432,-509,885,-686,455,601,636,-727,902,-562,-647,-319,954,586,-270,-586,960,92,897,-125,-479,586,528,-115,-573,-414,-379,-262],[-532,309,544,712,-941,-238,545,117,-427,115,-586,34,398,875,216,-194,592,130,-107,-621,-954,28,-352,45,140,-556,869,618,-707,363,432,920,-979,786,-372,-331,-570,160,-947,-363,-880,-336,113,125,-747,-5,827,429,42,-804,-291,6,-337,444,10,196,-153,-702,-546,979,478,-844,730,856,687,928,-828],[382,531,-553,-794,982,665,-523,828,-862,-714,-229,-326,-127,-962,813,685,-162,-549,-886,245,988,-583,538,116,-161,314,-347,388,973,-495,10,-325,-355,78,475,-53,880,139,-261,186,888,952,856,273,-111,-413,171,-238,695,354,-272,-118,-991,-273,-322,167,285,418,-215,-809,417,476,831,61,-605,386,-854],[-453,-596,264,127,-421,10,874,-891,179,-245,-267,775,23,238,403,665,-49,784,937,-270,-306,-800,450,-947,-36,818,-133,-384,-24,823,-728,-753,-348,-565,-569,-645,58,-226,587,317,-42,31,914,60,902,-691,291,264,98,15,279,-721,161,-285,952,250,908,465,470,30,-5,804,174,-390,940,-6,-732],[274,534,-164,149,311,541,-616,830,-645,825,-31,-650,-31,305,-627,701,745,565,-984,3,577,-610,-452,-429,463,-628,794,18,-268,504,-743,-379,-928,964,-356,159,436,588,-818,556,913,735,891,-591,402,-622,-991,-913,634,617,-554,-762,882,427,-993,-763,-980,-936,-879,293,-464,-275,-524,488,-128,480,708],[-154,-43,-501,344,-108,-499,489,-691,985,975,759,-499,-326,790,411,778,-117,-677,-79,921,-154,-602,170,-217,-322,-97,-479,468,-904,296,-79,463,879,984,353,-420,-758,-342,637,357,337,891,151,-763,868,-978,78,-449,-552,-781,-447,998,930,-941,-355,-963,-330,679,-546,-80,247,-240,-789,748,-368,107,839],[687,487,-678,-327,219,633,495,996,441,289,-900,-10,399,476,131,696,-288,-479,-722,-283,-302,45,-147,777,-131,709,-794,852,465,-889,-77,-190,-521,628,78,548,-568,-222,-861,-312,864,-372,-901,-675,-338,-432,-74,143,-234,506,622,310,-241,754,633,-273,879,740,-308,-565,-356,558,-533,-948,-19,-743,-505],[-901,822,249,-625,275,-823,-661,-347,-206,666,-801,-62,-105,-304,-189,-423,-108,-909,-80,682,-150,-914,-622,19,-827,-901,-963,-689,-193,-135,216,-770,863,-805,239,866,545,513,-487,254,-648,-749,36,-184,106,-633,852,330,-868,982,-729,-322,393,762,-997,-713,626,-220,-845,-688,24,344,-791,-668,979,578,-268],[140,964,-204,751,265,105,-227,648,-971,418,978,-88,758,-909,878,-267,373,-369,-875,-556,-536,296,372,-275,613,-796,-58,999,209,-579,823,-311,-227,-984,-11,162,50,658,-146,-124,-841,-438,126,-585,797,92,-664,165,-240,829,-255,-471,845,565,402,104,3,-138,-213,-810,-145,203,872,231,-236,756,27],[-853,-993,241,741,358,536,-184,11,745,-191,-109,172,202,-181,599,406,-362,-757,-81,351,-643,930,-781,224,471,29,373,-797,812,-609,-361,315,692,-115,-940,-600,714,273,-47,104,953,456,95,-378,-809,-815,879,624,136,108,-999,-494,924,718,-497,56,25,-589,-613,509,-524,-387,-820,-112,260,645,-661],[248,-580,-23,136,-492,-250,-543,-170,-384,519,-795,-825,-202,-387,-278,-776,934,949,958,-1000,-248,773,-239,794,-868,-128,-387,-560,-928,-390,582,720,-663,727,406,668,322,-932,-833,-105,-818,-604,-304,-296,409,-976,236,-584,-686,177,638,-417,-727,-864,-911,-421,-302,776,222,-610,901,502,-765,174,258,981,247],[-805,166,-83,189,149,-846,556,806,624,-501,401,775,-605,710,-627,-999,83,-304,265,181,-486,-19,549,298,-688,-97,-478,-879,747,281,-777,-870,-952,90,772,719,847,-385,-634,41,-795,807,762,-929,-136,363,465,-44,-257,-906,-890,665,783,945,-311,362,-869,531,148,59,-302,231,-574,-128,-575,-579,210],[249,758,248,186,-861,941,850,-875,574,-115,810,-231,-775,-539,912,-265,-325,-665,-582,198,-921,-11,78,-761,407,467,405,-213,218,-871,-935,443,-746,-771,-202,480,378,606,-695,-943,-722,578,-520,-700,-387,590,832,-438,421,-365,157,-803,-302,-42,724,488,-478,191,539,362,985,-560,-122,-426,-34,-491,-497],[-415,-880,-948,-460,-645,709,-736,974,178,751,-874,180,-825,-119,288,-57,321,-973,839,-129,-76,19,648,402,890,-432,227,-768,204,238,846,-22,-817,-396,806,825,135,-214,-897,-782,-987,-985,557,1,258,988,147,159,-28,81,-202,298,635,474,439,716,116,-747,576,790,-863,899,876,-932,107,-644,-155],[-632,-918,-84,935,349,-231,772,812,649,-750,577,729,409,560,-177,-87,951,769,761,-763,171,-617,594,367,588,-351,-177,-800,-437,-303,277,816,262,162,-884,513,-802,-377,-411,175,-914,-217,313,469,705,684,364,-236,-903,242,-664,515,-808,879,-444,637,-742,-602,891,-706,853,-752,-473,-405,376,937,-390],[644,-180,18,87,-568,424,810,673,800,-931,190,-772,-214,459,18,-619,716,-696,-957,-62,-381,395,-943,-351,-589,-514,481,-89,-436,736,826,-743,892,968,965,105,795,186,-512,789,-93,-920,-13,950,432,-810,-778,-891,-803,-507,682,994,-354,-728,113,138,316,-735,383,-70,302,927,-965,-833,-236,-634,-835],[-443,-354,-318,404,-604,816,384,-295,-483,262,-588,194,-627,-421,-658,-944,898,-686,-401,-496,401,-117,-406,346,-103,-745,-499,100,-655,677,-973,501,688,-461,936,-617,-886,-576,-160,687,-332,844,-972,486,697,468,-640,855,-392,-755,130,201,-841,-19,-736,91,900,-383,-708,-595,830,299,305,377,522,-255,25],[70,835,-535,-983,-394,86,-209,-165,75,-877,525,401,-666,-130,542,-437,-472,890,262,-211,-594,-925,-917,-815,836,-947,410,-927,-863,-471,111,-889,-889,470,400,-25,-737,-47,-129,641,-681,379,778,-482,-42,-811,373,972,-158,62,-57,427,782,143,-700,-422,720,-958,922,-844,108,554,672,-868,-373,267,-437],[-549,-974,253,-962,646,673,454,835,-353,-701,907,845,782,52,-991,-678,-959,-188,651,-232,-212,18,-206,-575,205,211,700,528,428,-272,271,937,387,-310,708,-539,-969,-579,-373,-858,92,40,-106,-972,778,-208,355,290,-796,43,3,-715,-489,48,694,-353,456,981,986,428,185,71,-253,623,-372,183,-716],[-691,61,-215,-395,-895,-204,979,-941,179,-365,470,-211,-72,700,63,155,861,-433,243,-570,877,-408,-961,-746,319,-542,-347,641,-277,-254,-764,-801,196,-989,-842,-738,-998,154,-196,575,-298,742,709,-997,-310,988,475,605,517,409,98,-41,-799,202,742,393,528,726,691,-385,378,-976,189,2,70,-587,-782],[49,167,-351,972,-495,739,-295,-16,88,-136,845,749,939,-701,-193,272,-990,-819,-563,540,911,-324,716,-89,-16,57,761,-417,-552,-915,120,-659,134,273,-971,-967,258,-742,-155,574,436,109,647,407,-244,-995,-854,-341,213,988,-987,596,-904,510,-162,-373,611,-99,72,381,273,-874,-414,-615,843,-240,155],[-91,-334,-78,-44,39,669,-339,649,-99,-519,-345,-716,-911,270,-229,-90,-693,-493,-237,-745,-871,304,-746,-916,-97,161,40,617,-519,299,667,476,74,-430,-492,203,588,-318,46,451,-235,-456,-179,866,981,847,-943,-445,509,410,665,695,634,-528,575,-291,-998,-990,413,-798,-265,284,-928,946,849,320,776],[-879,-712,-521,968,-910,-591,-408,751,243,-79,816,856,200,-711,184,-673,322,-865,-1,-4,46,-603,-712,-399,-754,-742,-241,257,-741,-817,-167,34,826,-129,86,-537,-9,9,-786,-751,749,-583,-759,887,972,-151,-766,-638,630,149,-941,-963,-702,-117,614,865,-871,-254,-508,-657,-434,-545,-948,580,187,788,85],[987,125,293,-911,-269,-739,615,-88,-213,-896,38,181,508,-691,770,169,248,-283,543,846,-893,335,163,-922,-472,-656,814,-86,-471,-119,-222,-426,-697,-747,-889,-921,-150,454,851,283,677,-57,-831,-482,-269,-107,348,-488,976,-895,950,793,-388,-488,0,545,-790,-351,494,140,-346,-596,-610,102,-252,-629,930]], r = 127, c = 4
matrixReshape(mat, r, c);