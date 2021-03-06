import defaultTheme from './DefaultTheme';

let crimson = Object.assign({},defaultTheme);
crimson.fontFamilies = {
  sans:`"Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif`,
  serif:`'Crimson Text', serif`,
}
crimson.webfonts = {
  serif: 'Crimson+Text'
}
crimson.colors = {"base":"#DC143C","black":"#000","blue":"#14a0dc","blue0":"#e4f4fb","blue1":"#c7e8f7","blue2":"#a6dbf2","blue3":"#80ccec","blue4":"#51b9e5","blue5":"#14a0dc","blue6":"#1291c7","blue7":"#107fae","blue8":"#0d6990","blue9":"#094b67","gray":"#bfafb2","gray0":"#faf9f9","gray1":"#f0eded","gray2":"#e6dfe0","gray3":"#dad1d3","gray4":"#cdc1c3","gray5":"#bfafb2","gray6":"#af9b9f","gray7":"#9c8388","gray8":"#81656a","gray9":"#4c3b3e","green":"#3cdc14","green0":"#e9fbe5","green1":"#d1f7c8","green2":"#b6f2a7","green3":"#96ec80","green4":"#6fe552","green5":"#3cdc14","green6":"#36c712","green7":"#30af10","green8":"#28920d","green9":"#1d690a","orange":"#dc5014","orange0":"#fbede7","orange1":"#f7d9cc","orange2":"#f3c2ad","orange3":"#eda788","orange4":"#e6845a","orange5":"#dc5014","orange6":"#c74812","orange7":"#ae3f10","orange8":"#90340d","orange9":"#662509","pink":"#dc14a0","pink0":"#fceaf7","pink1":"#f8d3ed","pink2":"#f4b8e2","pink3":"#f097d5","pink4":"#e96bc3","pink5":"#dc14a0","pink6":"#c71291","pink7":"#ae107f","pink8":"#910d69","pink9":"#68094b","red":"#dc143c","red0":"#fcebee","red1":"#f9d4db","red2":"#f5b9c5","red3":"#f099aa","red4":"#e96d86","red5":"#dc143c","red6":"#c71236","red7":"#ae1030","red8":"#910d27","red9":"#68091c","violet":"#5014dc","violet0":"#f0eafc","violet1":"#ded3f8","violet2":"#cbb9f5","violet3":"#b298f0","violet4":"#926ce9","violet5":"#5014dc","violet6":"#4812c6","violet7":"#3f10ad","violet8":"#340d8e","violet9":"#240963","white":"#fff","yellow":"#dcb414","yellow0":"#faf5e1","yellow1":"#f6ebc0","yellow2":"#f0df9c","yellow3":"#ead374","yellow4":"#e4c448","yellow5":"#dcb414","yellow6":"#c7a312","yellow7":"#af8f10","yellow8":"#91770d","yellow9":"#69560a"}

let forest = Object.assign({},defaultTheme);
forest.fontFamilies = {
  serif:"'Lora',serif",
  sans: `Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif`
}
forest.webfonts = {
  serif: 'Lora'
}
forest.colors = {"base":"forestgreen","black":"#000","blue":"#22568b","blue0":"#e9eef3","blue1":"#d0dbe6","blue2":"#b3c5d7","blue3":"#91abc5","blue4":"#668aaf","blue5":"#22568b","blue6":"#1f4d7d","blue7":"#1a436c","blue8":"#163658","blue9":"#0f253c","brown":"#8b5622","brown0":"#f3ede7","brown1":"#e5d9cd","brown2":"#d5c2b0","brown3":"#c3a88d","brown4":"#ac8761","brown5":"#8b5622","brown6":"#7d4d1f","brown7":"#6d431b","brown8":"#593716","brown9":"#3e260f","cyan":"#228b8b","cyan0":"#e6f2f2","cyan1":"#cbe4e4","cyan2":"#acd3d3","cyan3":"#88c1c1","cyan4":"#5daaaa","cyan5":"#228b8b","cyan6":"#1f7d7d","cyan7":"#1b6e6e","cyan8":"#165a5a","cyan9":"#104040","fuschia":"#8b228b","fuschia0":"#f4eaf4","fuschia1":"#e8d3e8","fuschia2":"#dab8da","fuschia3":"#c998c9","fuschia4":"#b26db2","fuschia5":"#8b228b","fuschia6":"#7d1f7d","fuschia7":"#6d1b6d","fuschia8":"#591659","fuschia9":"#3e0f3e","gray":"#acb6ac","gray0":"#f9faf9","gray1":"#eceeec","gray2":"#dee2de","gray3":"#cfd4cf","gray4":"#bec6be","gray5":"#acb6ac","gray6":"#97a397","gray7":"#7e8d7e","gray8":"#5e715e","gray9":"#344334","green":"#228b22","green0":"#e7f2e7","green1":"#cce4cc","green2":"#aed5ae","green3":"#8bc28b","green4":"#5fab5f","green5":"#228b22","green6":"#1f7d1f","green7":"#1b6e1b","green8":"#165a16","green9":"#104010","red":"#8b2222","red0":"#f4ebeb","red1":"#e8d4d4","red2":"#dab9b9","red3":"#ca9a9a","red4":"#b46f6f","red5":"#8b2222","red6":"#7d1f1f","red7":"#6c1b1b","red8":"#581616","red9":"#3d0f0f","violet":"#56228b","violet0":"#efebf4","violet1":"#ded4e8","violet2":"#cab9da","violet3":"#b19aca","violet4":"#9170b4","violet5":"#56228b","violet6":"#4d1e7c","violet7":"#421a6b","violet8":"#361557","violet9":"#240e3a","white":"#fff"}

let gold = Object.assign({},defaultTheme);
gold.fontFamilies = {
  sans:`'Montserrat',sans-serif`,
  serif:`Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif`
}
gold.webfonts = {
  sans: 'Montserrate'
}
gold.colors = {"base":"gold","black":"#000","blue":"#00aaff","blue0":"#e3f6ff","blue1":"#c4ebff","blue2":"#a1e0ff","blue3":"#78d2ff","blue4":"#45c1ff","blue5":"#00aaff","blue6":"#009ae7","blue7":"#0087ca","blue8":"#0070a8","blue9":"#005179","cyan":"#00ffd5","cyan0":"#eafffc","cyan1":"#d3fff8","cyan2":"#b8fff3","cyan3":"#97ffee","cyan4":"#69ffe6","cyan5":"#00ffd5","cyan6":"#00e7c1","cyan7":"#00cbaa","cyan8":"#00aa8e","cyan9":"#007b67","gold":"gold","gold0":"#fffadf","gold1":"#ffef97","gold2":"#ffe03b","gold3":"#f7d000","gold4":"#e5c100","gold5":"#d2b100","gold6":"#bb9e00","gold7":"#a18700","gold8":"#7f6b00","gold9":"#4a3f00","gray":"#b7b3a2","gray0":"#faf9f8","gray1":"#eeeeea","gray2":"#e2e1da","gray3":"#d5d3c9","gray4":"#c7c4b7","gray5":"#b7b3a2","gray6":"#a4a08b","gray7":"#8f8a70","gray8":"#706c58","gray9":"#423f34","indigo":"#002bff","indigo0":"#e9edff","indigo1":"#d0d8ff","indigo2":"#b3c0ff","indigo3":"#90a3ff","indigo4":"#617cff","indigo5":"#002bff","indigo6":"#0027e6","indigo7":"#0022c9","indigo8":"#001ca6","indigo9":"#001475","orange":"#FF8C00","orange0":"#fff8f1","orange1":"#ffead1","orange2":"#ffdbaf","orange3":"#ffc988","orange4":"#ffb55b","orange5":"#ff9c22","orange6":"#f08400","orange7":"#ce7100","orange8":"#a35900","orange9":"#603500","red":"#ff002b","red0":"#ffebee","red1":"#ffd5dc","red2":"#ffbbc6","red3":"#ff9bac","red4":"#ff7088","red5":"#ff002b","red6":"#e70027","red7":"#cb0022","red8":"#a9001d","red9":"#7b0015","white":"#fff"}

let indigo = Object.assign({},defaultTheme);
indigo.fontFamilies = {
  sans:"'Raleway',sans-serif",
  serif:`Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif`
}
indigo.webfonts = {
  sans:'Raleway'
}
indigo.colors = {"base":"indigo","black":"#000","blue":"#003882","blue0":"#e8edf4","blue1":"#ced8e7","blue2":"#afc1d8","blue3":"#8ba4c6","blue4":"#5b7fae","blue5":"#003882","blue6":"#003274","blue7":"#002b64","blue8":"#002351","blue9":"#001736","brown":"#824a00","brown0":"#f2ede5","brown1":"#e4d8c8","brown2":"#d4c1a7","brown3":"#c1a580","brown4":"#a8814e","brown5":"#824a00","brown6":"#754200","brown7":"#653a00","brown8":"#532f00","brown9":"#392000","cyan":"#007982","cyan0":"#e4f1f2","cyan1":"#c7e1e3","cyan2":"#a5d0d3","cyan3":"#7dbbbf","cyan4":"#4aa0a6","cyan5":"#007982","cyan6":"#006d75","cyan7":"#005f66","cyan8":"#004e54","cyan9":"#00373b","gray":"#b5b2b8","gray0":"#f9f9fa","gray1":"#eeedef","gray2":"#e2e0e3","gray3":"#d4d2d6","gray4":"#c5c3c8","gray5":"#b5b2b8","gray6":"#a39ea6","gray7":"#8d8791","gray8":"#706a76","gray9":"#453c4c","green":"#008209","green0":"#e5f2e6","green1":"#c8e4ca","green2":"#a7d4aa","green3":"#7fc084","green4":"#4ca753","green5":"#008209","green6":"#007508","green7":"#006607","green8":"#005406","green9":"#003c04","indigo":"#4a0082","indigo0":"#f0eaf5","indigo1":"#dfd2e9","indigo2":"#cbb6db","indigo3":"#b495cb","indigo4":"#9367b4","indigo5":"#4a0082","indigo6":"#420075","indigo7":"#3a0065","indigo8":"#2f0053","indigo9":"#210039","purple":"#820079","purple0":"#f4e9f4","purple1":"#e9d1e7","purple2":"#dbb5d8","purple3":"#ca93c6","purple4":"#b364ae","purple5":"#820079","purple6":"#75006d","purple7":"#66005f","purple8":"#54004e","purple9":"#3c0037","red":"#820900","red0":"#f4eae9","red1":"#e9d3d1","red2":"#dbb8b5","red3":"#ca9793","red4":"#b36a64","red5":"#820900","red6":"#750800","red7":"#660700","red8":"#530600","red9":"#3a0400","white":"#fff"}

let khaki = Object.assign({},defaultTheme);
khaki.fontFamilies = {
  serif:"'Playfair Display',serif",
  sans:"'Open Sans',sans-serif",
}
khaki.webfonts = {
  serif:'Playfair+Display',
  sans:'Open+Sans',
}
khaki.colors = {"base":"darkkhaki","black":"#000","burgundy":"#900020","burgundy0":"#fcf8f9","burgundy1":"#f6ebed","burgundy2":"#f0dce0","burgundy3":"#e9ccd2","burgundy4":"#e1bac3","burgundy5":"#d8a6b1","burgundy6":"#ce8e9d","burgundy7":"#c17283","burgundy8":"#b04a61","burgundy9":"#84001d","coffee":"#675118","coffee0":"#faf9f7","coffee1":"#f0ede8","coffee2":"#e4e0d6","coffee3":"#d8d3c4","coffee4":"#cbc3b0","coffee5":"#bcb299","coffee6":"#ab9f80","coffee7":"#978861","coffee8":"#7d6a39","coffee9":"#4e3d12","cream":"#F1E291","cream0":"#fcfaeb","cream1":"#f7eec0","cream2":"#f1e291","cream3":"#e2d488","cream4":"#d2c57e","cream5":"#c0b473","cream6":"#aba167","cream7":"#938a58","cream8":"#746d46","cream9":"#444029","gray":"#b5b4a1","gray0":"#faf9f8","gray1":"#eeeee9","gray2":"#e2e1da","gray3":"#d4d3c8","gray4":"#c6c4b6","gray5":"#b5b4a1","gray6":"#a3a189","gray7":"#8c8a75","gray8":"#6e6d5c","gray9":"#404036","green":"#A0B385","green0":"#f9faf7","green1":"#ebefe5","green2":"#dce3d2","green3":"#ccd7be","green4":"#bbc9a8","green5":"#a8b98f","green6":"#94a67b","green7":"#7f8e6a","green8":"#647053","green9":"#3b4231","khaki":"darkkhaki","khaki0":"#fafaf4","khaki1":"#f0eedd","khaki2":"#e5e2c4","khaki3":"#d8d5a8","khaki4":"#cbc68a","khaki5":"#bcb66a","khaki6":"#a8a25f","khaki7":"#908b51","khaki8":"#716e40","khaki9":"#424026","lightbrown":"#bd8d6b","lightbrown0":"#f7f1ec","lightbrown1":"#eee1d8","lightbrown2":"#e4d0c2","lightbrown3":"#d9bda9","lightbrown4":"#cca78d","lightbrown5":"#bd8d6b","lightbrown6":"#ab7f61","lightbrown7":"#956f55","lightbrown8":"#7c5c46","lightbrown9":"#584232","sepia":"#471605","sepia0":"#faf9f9","sepia1":"#f1edeb","sepia2":"#e6dfdd","sepia3":"#dbd1ce","sepia4":"#cec1bd","sepia5":"#c0b0aa","sepia6":"#b09b94","sepia7":"#9d837a","sepia8":"#85655a","sepia9":"#5f3425","white":"#fff"}

let lime = Object.assign({},defaultTheme);
lime.fontFamilies = {
  serif: `'Libre Baskerville',serif`,
  sans:`"Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif`,
}
lime.webfonts = {
  serif: 'Libre+Baskerville',
}
lime.colors = {"base":"limegreen","black":"#000","blue":"#327fcd","blue0":"#e8f1f9","blue1":"#cfe1f3","blue2":"#b2cfec","blue3":"#91bae4","blue4":"#69a1da","blue5":"#327fcd","blue6":"#2d73b9","blue7":"#2764a2","blue8":"#205285","blue9":"#173a5e","cyan":"#32cdcd","cyan0":"#e6f9f9","cyan1":"#cbf2f2","cyan2":"#adebeb","cyan3":"#8be3e3","cyan4":"#63d9d9","cyan5":"#32cdcd","cyan6":"#2dbaba","cyan7":"#28a3a3","cyan8":"#218787","cyan9":"#186262","fuschia":"#cd32cd","fuschia0":"#faebfa","fuschia1":"#f5d4f5","fuschia2":"#eebbee","fuschia3":"#e79ce7","fuschia4":"#dd74dd","fuschia5":"#cd32cd","fuschia6":"#b92db9","fuschia7":"#a228a2","fuschia8":"#862186","fuschia9":"#601760","gray":"#a5b8a5","gray0":"#f8faf8","gray1":"#eaefea","gray2":"#dbe3db","gray3":"#cbd6cb","gray4":"#b9c8b9","gray5":"#a5b8a5","gray6":"#8ea68e","gray7":"#729172","gray8":"#5a725a","gray9":"#344334","green":"#32cd32","green0":"#e7f9e7","green1":"#cdf3cd","green2":"#b0ecb0","green3":"#8fe48f","green4":"#66da66","green5":"#32cd32","green6":"#2db92d","green7":"#28a328","green8":"#218721","green9":"#186218","indigo":"#3232cd","indigo0":"#ececfa","indigo1":"#d6d6f5","indigo2":"#bdbdef","indigo3":"#a0a0e8","indigo4":"#7878de","indigo5":"#3232cd","indigo6":"#2d2db8","indigo7":"#2727a0","indigo8":"#202082","indigo9":"#16165a","orange":"#FF8C00","orange0":"#fff8f1","orange1":"#ffead1","orange2":"#ffdbaf","orange3":"#ffc988","orange4":"#ffb55b","orange5":"#ff9c22","orange6":"#f08400","orange7":"#ce7100","orange8":"#a35900","orange9":"#603500","red":"#cd3232","red0":"#faebeb","red1":"#f5d5d5","red2":"#efbcbc","red3":"#e79d9d","red4":"#dd7575","red5":"#cd3232","red6":"#b92d2d","red7":"#a22727","red8":"#852121","red9":"#5f1717","violet":"#7f32cd","violet0":"#f2ebfa","violet1":"#e4d4f5","violet2":"#d4bbee","violet3":"#c19ce7","violet4":"#a874dd","violet5":"#7f32cd","violet6":"#722db9","violet7":"#6427a1","violet8":"#522084","violet9":"#39165c","white":"#fff","yellow":"#FFD700","yellow0":"#fffadf","yellow1":"#ffef97","yellow2":"#ffe03b","yellow3":"#f7d000","yellow4":"#e5c100","yellow5":"#d2b100","yellow6":"#bb9e00","yellow7":"#a18700","yellow8":"#7f6b00","yellow9":"#4a3f00",}

let orchid = Object.assign({},defaultTheme);
orchid.fontFamilies = {
  sans:"'Quicksand',sans-serif",
  serif:`"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif`,
}
orchid.webfonts = {
  sans:'Quicksand',
}
orchid.colors = {"base":"orchid","black":"#000","blue":"#70a1da","blue0":"#edf3fa","blue1":"#d9e6f5","blue2":"#c4d8f0","blue3":"#acc8e9","blue4":"#90b6e2","blue5":"#70a1da","blue6":"#6591c5","blue7":"#597fad","blue8":"#49698f","blue9":"#344b66","cyan":"#70d6da","cyan0":"#ecf9fa","cyan1":"#d7f4f5","cyan2":"#c1edef","cyan3":"#a9e6e9","cyan4":"#8edfe2","cyan5":"#70d6da","cyan6":"#65c2c5","cyan7":"#59aaad","cyan8":"#4a8d90","cyan9":"#366668","gray":"#bfaebf","gray0":"#faf9fa","gray1":"#f0ecf0","gray2":"#e6dfe5","gray3":"#dad0da","gray4":"#cdc0cd","gray5":"#bfaebf","gray6":"#af99ae","gray7":"#968395","gray8":"#766876","gray9":"#453d45","green":"#70da74","green0":"#ecfaed","green1":"#d8f5d9","green2":"#c2efc4","green3":"#aae9ad","green4":"#8fe292","green5":"#70da74","green6":"#65c569","green7":"#59ad5c","green8":"#4a904d","green9":"#356837","indigo":"#7470da","indigo0":"#efeefb","indigo1":"#dddcf6","indigo2":"#cac8f1","indigo3":"#b3b1eb","indigo4":"#9895e4","indigo5":"#7470da","indigo6":"#6965c5","indigo7":"#5b58ac","indigo8":"#4b498d","indigo9":"#353364","orange":"#daa970","orange0":"#faf3ec","orange1":"#f5e7d7","orange2":"#efdac1","orange3":"#e9cba9","orange4":"#e2bb8e","orange5":"#daa970","orange6":"#c59965","orange7":"#ad8659","orange8":"#8f6f4a","orange9":"#675035","orchid":"#da70d6","orchid0":"#fbeefa","orchid1":"#f6dcf5","orchid2":"#f1c7ef","orchid3":"#eaafe8","orchid4":"#e394e0","orchid5":"#da70d6","orchid6":"#c565c1","orchid7":"#ad59a9","orchid8":"#8f498c","orchid9":"#663564","pink":"#da70a1","pink0":"#fbeef4","pink1":"#f6dce8","pink2":"#f1c7da","pink3":"#eaafcb","pink4":"#e394b8","pink5":"#da70a1","pink6":"#c56591","pink7":"#ac597f","pink8":"#8f4969","pink9":"#66344b","red":"#da7470","red0":"#fdf8f8","red1":"#f9eae9","red2":"#f5dbda","red3":"#f1cac8","red4":"#ecb7b5","red5":"#e6a19f","red6":"#df8884","red7":"#cd6d69","red8":"#a25653","red9":"#5f3331","teal":"#70daa9","teal0":"#ecfaf4","teal1":"#d8f5e7","teal2":"#c1efda","teal3":"#a9e9cb","teal4":"#8ee2bb","teal5":"#70daa9","teal6":"#65c599","teal7":"#59ad86","teal8":"#4a9070","teal9":"#366851","violet":"#a970da","violet0":"#f5eefb","violet1":"#eadcf6","violet2":"#ddc7f0","violet3":"#cfafea","violet4":"#be93e3","violet5":"#a970da","violet6":"#9965c5","violet7":"#8558ac","violet8":"#6e498e","violet9":"#4e3465","white":"#fff","yellow":"#d6da70","yellow0":"#f9faea","yellow1":"#f3f4d5","yellow2":"#eceebe","yellow3":"#e5e8a5","yellow4":"#dee18c","yellow5":"#d6da70","yellow6":"#c2c565","yellow7":"#aaad59","yellow8":"#8e904a","yellow9":"#676836"}

let peru = Object.assign({},defaultTheme);
peru.fontFamilies = {
  serif:"'Roboto Slab',serif",
  sans:"'Roboto',sans-serif",
}
peru.webfonts = {
  serif:'Roboto+Slab',
  sans:'Roboto',
}
peru.colors = {"base":"#CD853F","black":"#000","blue":"#3f88cd","blue0":"#e9f1f9","blue1":"#d0e2f3","blue2":"#b5d1ec","blue3":"#96bee4","blue4":"#70a6da","blue5":"#3f88cd","blue6":"#397bb9","blue7":"#326ba2","blue8":"#295885","blue9":"#1d3f5f","cyan":"#3fcdcb","cyan0":"#e7f9f9","cyan1":"#cef2f2","cyan2":"#b1ebea","cyan3":"#91e2e1","cyan4":"#6cd9d7","cyan5":"#3fcdcb","cyan6":"#39b9b8","cyan7":"#32a3a1","cyan8":"#2a8786","cyan9":"#1e6261","fuschia":"#cb3fcd","fuschia0":"#faebfa","fuschia1":"#f4d5f4","fuschia2":"#edbcee","fuschia3":"#e59fe6","fuschia4":"#db79dc","fuschia5":"#cb3fcd","fuschia6":"#b739b9","fuschia7":"#a032a2","fuschia8":"#852986","fuschia9":"#5e1d5f","gray":"#bbb1a8","gray0":"#faf9f8","gray1":"#efedeb","gray2":"#e4e0dc","gray3":"#d8d2cc","gray4":"#cac3bb","gray5":"#bbb1a8","gray6":"#aa9e92","gray7":"#968778","gray8":"#766a5e","gray9":"#453e37","green":"#41cd3f","green0":"#e8f9e8","green1":"#d0f3cf","green2":"#b4ebb3","green3":"#95e394","green4":"#70d96e","green5":"#41cd3f","green6":"#3bb939","green7":"#34a332","green8":"#2b872a","green9":"#1f621e","indigo":"#3f41cd","indigo0":"#ececfa","indigo1":"#d7d7f5","indigo2":"#bfbfee","indigo3":"#a2a3e7","indigo4":"#7c7edd","indigo5":"#3f41cd","indigo6":"#393ab8","indigo7":"#3133a0","indigo8":"#282983","indigo9":"#1c1d5a","red":"#cd3f41","red0":"#faecec","red1":"#f4d6d6","red2":"#eebdbe","red3":"#e6a0a1","red4":"#dc7a7c","red5":"#cd3f41","red6":"#b9393b","red7":"#a23233","red8":"#85292a","red9":"#5f1d1e","white":"#fff","yellow":"#cdcb3f","yellow0":"#f8f8e5","yellow1":"#f1f0c9","yellow2":"#e9e8ab","yellow3":"#e1df8a","yellow4":"#d7d666","yellow5":"#cdcb3f","yellow6":"#bab839","yellow7":"#a3a132","yellow8":"#87862a","yellow9":"#62611e"}

let royal = Object.assign({},defaultTheme);
royal.fontFamilies = {
  sans: `'avenir next', avenir, helvetica, arial, sans-serif`
}
royal.colors = {"base":"royalblue","black":"#000","blue":"#4169e1","blue0":"#eaeffc","blue1":"#d3ddf8","blue2":"#bac8f4","blue3":"#9bb0ef","blue4":"#7693e9","blue5":"#4169e1","blue6":"#3b5fcb","blue7":"#3353b1","blue8":"#2a4491","blue9":"#1e3066","cyan":"#41b9e1","cyan0":"#e8f6fb","cyan1":"#ceedf7","cyan2":"#b2e3f3","cyan3":"#92d7ee","cyan4":"#6dc9e8","cyan5":"#41b9e1","cyan6":"#3ba7cb","cyan7":"#3493b3","cyan8":"#2b7a94","cyan9":"#1f586b","gray":"#aeb3c0","gray0":"#f9f9fa","gray1":"#ecedf1","gray2":"#dfe1e6","gray3":"#d0d3db","gray4":"#c0c4ce","gray5":"#aeb3c0","gray6":"#9aa0b1","gray7":"#82899e","gray8":"#666c7c","gray9":"#3c3f49","green":"#41e169","green0":"#e9fbed","green1":"#d0f8da","green2":"#b4f3c4","green3":"#95eeab","green4":"#70e88e","green5":"#41e169","green6":"#3bcc5f","green7":"#34b354","green8":"#2b9545","green9":"#1f6c32","indigo":"#6941e1","indigo0":"#f0ecfc","indigo1":"#dfd6f9","indigo2":"#ccbef5","indigo3":"#b5a1f0","indigo4":"#977cea","indigo5":"#6941e1","indigo6":"#5f3bcb","indigo7":"#5233b1","indigo8":"#442a91","indigo9":"#2f1d65","orange":"#eeaa33","orange0":"#fef9f0","orange1":"#fbecd1","orange2":"#f8ddae","orange3":"#f5cd88","orange4":"#f1bb5b","orange5":"#e9a632","orange6":"#d0952d","orange7":"#b38026","orange8":"#8d651e","orange9":"#533b12","pink":"#e141b9","pink0":"#fcecf8","pink1":"#f9d6f0","pink2":"#f5bde7","pink3":"#f0a0dc","pink4":"#ea7bce","pink5":"#e141b9","pink6":"#cb3ba7","pink7":"#b23392","pink8":"#932b79","pink9":"#691e57","red":"#ee5555","red0":"#fef8f8","red1":"#fde9e9","red2":"#fbd9d9","red3":"#f9c7c7","red4":"#f7b2b2","red5":"#f59a9a","red6":"#f27d7d","red7":"#ed5454","red8":"#bb4343","red9":"#6f2828","teal":"#41e1b9","teal0":"#e8fbf7","teal1":"#cff7ed","teal2":"#b3f3e3","teal3":"#93eed7","teal4":"#6ee8ca","teal5":"#41e1b9","teal6":"#3bcca7","teal7":"#34b393","teal8":"#2b957a","teal9":"#1f6c59","violet":"#b941e1","violet0":"#f8ebfc","violet1":"#f0d6f8","violet2":"#e7bdf5","violet3":"#dc9ff0","violet4":"#ce7aea","violet5":"#b941e1","violet6":"#a73bcb","violet7":"#9233b2","violet8":"#792a93","violet9":"#561e68","white":"#fff","yellow":"#FFDD22","yellow0":"#fffadf","yellow1":"#ffef95","yellow2":"#ffe037","yellow3":"#f2d220","yellow4":"#e1c31e","yellow5":"#cdb21b","yellow6":"#b79f18","yellow7":"#9d8815","yellow8":"#7c6c11","yellow9":"#493f0a"}

let salmon = Object.assign({},defaultTheme);
salmon.fontFamilies = {
  sans:"'Istok Web',sans-serif",
  serif:"'Lora',serif",
}
salmon.webfonts = {
  sans:'Istok+Web',
  serif:'Lora',
}
salmon.colors = {"base":"salmon","black":"#000","blue":"#72a8fa","blue0":"#edf4fe","blue1":"#d9e8fe","blue2":"#c4dbfd","blue3":"#acccfc","blue4":"#91bbfb","blue5":"#72a8fa","blue6":"#6798e2","blue7":"#5a85c6","blue8":"#4b6ea4","blue9":"#364f76","cyan":"#72ecfa","cyan0":"#edfdfe","cyan1":"#d9fafe","cyan2":"#c3f7fd","cyan3":"#acf4fc","cyan4":"#91f0fb","cyan5":"#72ecfa","cyan6":"#67d6e2","cyan7":"#5bbcc7","cyan8":"#4c9ca6","cyan9":"#377278","fuschia":"#fa72ec","fuschia0":"#feeffd","fuschia1":"#feddfa","fuschia2":"#fdc9f8","fuschia3":"#fcb1f5","fuschia4":"#fb96f1","fuschia5":"#fa72ec","fuschia6":"#e267d5","fuschia7":"#c65abb","fuschia8":"#a54b9b","fuschia9":"#763670","gray":"#bfafad","gray0":"#faf9f9","gray1":"#f0edec","gray2":"#e6dfdf","gray3":"#dad1d0","gray4":"#cdc1c0","gray5":"#bfafad","gray6":"#ab9d9b","gray7":"#938685","gray8":"#746a69","gray9":"#443e3d","green":"#72fa80","green0":"#eefef0","green1":"#dbfedf","green2":"#c7fdcc","green3":"#affcb7","green4":"#94fb9f","green5":"#72fa80","green6":"#67e274","green7":"#5bc766","green8":"#4ca655","green9":"#37783e","indigo":"#8072fa","indigo0":"#f0effe","indigo1":"#e0ddfe","indigo2":"#cec9fd","indigo3":"#b9b1fc","indigo4":"#a096fb","indigo5":"#8072fa","indigo6":"#7367e2","indigo7":"#655ac5","indigo8":"#534aa3","indigo9":"#3b3574","lime":"#a8fa72","lime0":"#f3feec","lime1":"#e7fed8","lime2":"#dafdc3","lime3":"#cbfcab","lime4":"#bbfb90","lime5":"#a8fa72","lime6":"#98e267","lime7":"#86c75b","lime8":"#6fa64c","lime9":"#517937","orange":"#fac472","orange0":"#fef7eb","orange1":"#feeed6","orange2":"#fde5c0","orange3":"#fcdba8","orange4":"#fbd08e","orange5":"#fac472","orange6":"#e2b167","orange7":"#c79c5b","orange8":"#a5824b","orange9":"#785e37","pink":"#fa72a8","pink0":"#feeff5","pink1":"#fedcea","pink2":"#fdc8dd","pink3":"#fcb1cf","pink4":"#fb96be","pink5":"#fa72a8","pink6":"#e26798","pink7":"#c65a85","pink8":"#a44b6e","pink9":"#76364f","salmon":"salmon","salmon0":"#fff8f7","salmon1":"#fee9e6","salmon2":"#fdd8d4","salmon3":"#fdc6c0","salmon4":"#fcb1a8","salmon5":"#fb988d","salmon6":"#f47d6f","salmon7":"#d16b5f","salmon8":"#a5554b","salmon9":"#61322c","teal":"#72fac4","teal0":"#eefef8","teal1":"#dbfef0","teal2":"#c6fde7","teal3":"#aefcdd","teal4":"#93fbd2","teal5":"#72fac4","teal6":"#67e2b2","teal7":"#5bc79c","teal8":"#4ca682","teal9":"#37795e","violet":"#c472fa","violet0":"#f8eefe","violet1":"#f0dcfe","violet2":"#e8c8fd","violet3":"#deb0fc","violet4":"#d395fb","violet5":"#c472fa","violet6":"#b167e2","violet7":"#9b5ac6","violet8":"#804ba4","violet9":"#5c3575","white":"#fff","yellow":"#ecfa72","yellow0":"#fcfeec","yellow1":"#fafed7","yellow2":"#f7fdc1","yellow3":"#f3fca9","yellow4":"#f0fb8f","yellow5":"#ecfa72","yellow6":"#d6e367","yellow7":"#bcc75b","yellow8":"#9da64c","yellow9":"#727937"}

let sky = Object.assign({},defaultTheme);
sky.fontFamilies = {
  sans:"'Open Sans',sans-serif",
  serif:"'Libre Baskerville',serif",
}
sky.webfonts = {
  sans:'Open+Sans',
  serif:'Libre+Baskerville',
}
sky.colors = {"base":"deepskyblue","black":"#000","blue":"#0040ff","blue0":"#e8edff","blue1":"#cddaff","blue2":"#afc3ff","blue3":"#8ba8ff","blue4":"#5a83ff","blue5":"#0040ff","blue6":"#003ae6","blue7":"#0032c9","blue8":"#002aa5","blue9":"#001d75","cyan":"#00bfff","cyan0":"#e3f8ff","cyan1":"#c4f0ff","cyan2":"#a1e7ff","cyan3":"#78ddff","cyan4":"#45d0ff","cyan5":"#00bfff","cyan6":"#00ade7","cyan7":"#0098cb","cyan8":"#007ea8","cyan9":"#005b7a","gray":"#a7b5ba","gray0":"#f8fafa","gray1":"#ebeeef","gray2":"#dce2e4","gray3":"#ccd4d7","gray4":"#bbc6c9","gray5":"#a7b5ba","gray6":"#91a3a9","gray7":"#778d94","gray8":"#5c6f76","gray9":"#364145","green":"#00ff40","green0":"#eaffef","green1":"#d3ffde","green2":"#b8ffca","green3":"#97ffb1","green4":"#6aff8f","green5":"#00ff40","green6":"#00e73a","green7":"#00cb33","green8":"#00aa2b","green9":"#007b1f","orange":"#ffbf00","orange0":"#fff7df","orange1":"#ffeebc","orange2":"#ffe596","orange3":"#ffda6b","orange4":"#ffcd3a","orange5":"#ffbf00","orange6":"#e7ad00","orange7":"#cb9800","orange8":"#a97e00","orange9":"#7a5b00","pink":"#ff00bf","pink0":"#ffebfa","pink1":"#ffd4f4","pink2":"#ffbaee","pink3":"#ff9ae6","pink4":"#ff6edb","pink5":"#ff00bf","pink6":"#e700ad","pink7":"#cb0098","pink8":"#a9007f","pink9":"#7b005c","red":"#ff3333","red0":"#fff8f8","red1":"#ffe8e8","red2":"#ffd7d7","red3":"#ffc5c5","red4":"#ffafaf","red5":"#ff9595","red6":"#ff7474","red7":"#ff3e3e","red8":"#cf2929","red9":"#7c1919","violet":"#bf00ff","violet0":"#faeaff","violet1":"#f4d3ff","violet2":"#edb7ff","violet3":"#e596ff","violet4":"#d968ff","violet5":"#bf00ff","violet6":"#ad00e7","violet7":"#9800cb","violet8":"#7e00a9","violet9":"#5c007a","white":"#fff","yellow":"#f8eb14","yellow0":"#fefbd4","yellow1":"#faf268","yellow2":"#f2e514","yellow3":"#e3d712","yellow4":"#d3c811","yellow5":"#c1b710","yellow6":"#aca30e","yellow7":"#948c0c","yellow8":"#746e09","yellow9":"#444106"}

let slate = Object.assign({},defaultTheme);
  
let turquoise = Object.assign({},defaultTheme);
turquoise.fontFamilies = {
  serif:"'Merriweather',serif",
  sans:"'PT Sans',sans-serif",
}
turquoise.webfonts = {
  serif:'Merriweather',
  sans:'PT+Sans',
}
turquoise.colors = {"base":"#48D1CC","black":"#000","blue":"#4893d1","blue0":"#e9f2fa","blue1":"#d1e4f4","blue2":"#b7d4ed","blue3":"#99c3e5","blue4":"#75aedc","blue5":"#4893d1","blue6":"#4185bd","blue7":"#3974a5","blue8":"#2f6088","blue9":"#214461","gray":"#a2b7b6","gray0":"#f8fafa","gray1":"#eaeeee","gray2":"#dae2e2","gray3":"#c9d5d5","gray4":"#b7c7c6","gray5":"#a2b7b6","gray6":"#8ba5a4","gray7":"#748e8d","gray8":"#5b706f","gray9":"#354241","green":"#4fd148","green0":"#eaf9e9","green1":"#d2f3d0","green2":"#b8edb5","green3":"#9be597","green4":"#79dc73","green5":"#4fd148","green6":"#47bd41","green7":"#3fa639","green8":"#348a30","green9":"#266422","indigo":"#484fd1","indigo0":"#ecedfa","indigo1":"#d7d9f5","indigo2":"#bfc2ef","indigo3":"#a3a6e8","indigo4":"#7f84df","indigo5":"#484fd1","indigo6":"#4147bc","indigo7":"#383ea4","indigo8":"#2e3386","indigo9":"#20235d","orange":"#FF7F50","orange0":"#fff8f5","orange1":"#ffe9e1","orange2":"#ffd9cb","orange3":"#ffc6b2","orange4":"#ffb195","orange5":"#ff9872","orange6":"#f97c4e","orange7":"#d56a43","orange8":"#a95435","orange9":"#63311f","pink":"#d14893","pink0":"#faecf4","pink1":"#f5d6e7","pink2":"#efbed9","pink3":"#e7a1c8","pink4":"#de7db2","pink5":"#d14893","pink6":"#bd4185","pink7":"#a53974","pink8":"#882f60","pink9":"#612144","red":"#d1484f","red0":"#faeced","red1":"#f5d7d8","red2":"#efbfc1","red3":"#e8a2a6","red4":"#df7e83","red5":"#d1484f","red6":"#bd4147","red7":"#a5393e","red8":"#882f33","red9":"#612125","turquoise":"#48d1ca","turquoise0":"#e8f9f8","turquoise1":"#cff3f1","turquoise2":"#b4ece9","turquoise3":"#95e4e0","turquoise4":"#72dcd6","turquoise5":"#48d1ca","turquoise6":"#41bdb7","turquoise7":"#39a6a1","turquoise8":"#308a85","turquoise9":"#226460","violet":"#8648d1","violet0":"#f2ecfa","violet1":"#e4d6f5","violet2":"#d4beef","violet3":"#c1a2e8","violet4":"#a97ede","violet5":"#8648d1","violet6":"#7941bc","violet7":"#6939a4","violet8":"#562e87","violet9":"#3d215f","white":"#fff","yellow":"#FFE000","yellow0":"#fffada","yellow1":"#fff081","yellow2":"#ffe106","yellow3":"#f0d300","yellow4":"#dfc400","yellow5":"#ccb300","yellow6":"#b6a000","yellow7":"#9c8900","yellow8":"#7b6c00","yellow9":"#484000"}

export default {
  'Crimson': crimson,
  'Forest': forest,
  'Gold': gold,
  'Indigo': indigo,
  'Khaki': khaki,
  'Lime': lime,
  'Orchid': orchid,
  'Peru': peru,
  'Royal': royal,
  'Salmon': salmon,
  'Sky': sky,
  'Slate': slate,
  'Turquoise': turquoise,
};