'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "523afae94faef0b9266d9dfef1a1a493",
"version.json": "93402897272f16a58d2d1e6dab229198",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"macos/RunnerTests/RunnerTests.swift": "97d3a20fd20a063c192e886d1822b4a8",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "5bd47c3ef1d1a261037c87fb3ddb9cfd",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/DebugProfile.entitlements": "6e164fc6ed6acb30c71fe12e29e49642",
"macos/Runner/Base.lproj/MainMenu.xib": "a41bc20792a7e771d7901124cdb8c835",
"macos/Runner/MainFlutterWindow.swift": "4a747b1f256d62a2bbb79bd976891eb5",
"macos/Runner/Configs/AppInfo.xcconfig": "fd6b61d2697812fb409e2cbf0c4530ed",
"macos/Runner/Configs/Debug.xcconfig": "0a7555f820f3e4371d88ec1c339d70ef",
"macos/Runner/Configs/Release.xcconfig": "d36330778580798c0d9c5a5b71501a0f",
"macos/Runner/Configs/Warnings.xcconfig": "e19c2368cf97e5f3eaf8de37cff2b341",
"macos/Runner/AppDelegate.swift": "2a7411ae3e7c6715525b94b6f8d2e80b",
"macos/Runner/Info.plist": "b945a5051bb1cca2d906ac0be98b629a",
"macos/Runner/Release.entitlements": "e6fde05dec64f9856d3978a4a5e4bf48",
"macos/Runner.xcodeproj/project.pbxproj": "07d42c1bc73242d9af88e8ad27b7ed37",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "b5dd2de905369bd01826c30df6145d96",
"macos/Flutter/Flutter-Debug.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Flutter/Flutter-Release.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "5e47b957170e0184d8cfe362862d1b84",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "385f9067c9d59e54e62248f39bf02144",
"index.html": "2f303ddca19cdd813bae6ac785ad55eb",
"/": "2f303ddca19cdd813bae6ac785ad55eb",
"test/widget_test.dart": "58dbc28805ccf15a736575f5d432d6ee",
"main.dart.js": "aa72c741ad5b75b1dd2ddf8d062a1d62",
"web/index.html": "450216d3b2ac5ddfc29d846db9b2658b",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/manifest.json": "5e77ead3956445b1600b644bc813699c",
"pubspec.lock": "1a7bfd9a91dff294ea4d9fe7e075f1f1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/RunnerTests/RunnerTests.swift": "a225a382d14d7b16b6f602a5c1d49331",
"ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"ios/Runner/AppDelegate.swift": "303ca46dbd58544be7b816861d70a27c",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "6cdb016db9c8cd7cc7d7ab91a00fbd44",
"ios/Runner.xcodeproj/project.pbxproj": "613682d6d2ae1c5878a4eff767235460",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "3e088bc3ef2b27e72da13a5f953edd64",
"ios/Flutter/flutter_export_environment.sh": "ab9fc35de76ef1c35d483f304bdc622e",
"ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/AppFrameworkInfo.plist": "5eb1ee18836d512da62e476379865f8d",
"ios/Flutter/Generated.xcconfig": "e9b416983f036f4b1cefa91d372f7d4a",
"README.md": "71186b81b8361f64d05dfde376961c3b",
"log.txt": "1d13eef785d48cff5919079fd9c614db",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pubspec.yaml": "0b136a8823426c711db62444d73da01b",
"linux/CMakeLists.txt": "1e7617d30b7a8c6fde6059088ec251c7",
"linux/runner/main.cc": "0643b8609698e96b3abd63c210361a87",
"linux/runner/CMakeLists.txt": "6d75431dc21756981b53a7494c836311",
"linux/runner/my_application.h": "7bd839b67ebee22174be9f4da4521b6f",
"linux/runner/my_application.cc": "bf59d551b5009ddf39c520183bb578ab",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/CMakeLists.txt": "46690fb8ffaf7d227d8bc4713f31140d",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"android/app/build.gradle.kts": "9a63a086bce3aa50ba0cff970873dd1a",
"android/app/src/profile/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/values-night/styles.xml": "feddd27a2f77ef486e2b7a420b1de43d",
"android/app/src/main/res/values/styles.xml": "58b48ec178bde5aad76063577172ad24",
"android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/AndroidManifest.xml": "6b36b3d58e7ff2eb620e1eba9dea3982",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/testf/flutter_test_2/MainActivity.kt": "0687a00c3025a7308ccd75fd2c4581eb",
"android/app/src/debug/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"android/local.properties": "e67c1d3200a60b0f24a4e2b1107d1e37",
"android/gradle/wrapper/gradle-wrapper.properties": "63a74fa50183b131917bedd120ce2d40",
"android/build.gradle.kts": "699579880a795350891cafc998a3ec79",
"android/settings.gradle.kts": "683f9ca2f32a701ed1517715bf394e23",
"android/gradle.properties": "7b10ce389a3f45df326e4f3b665aa00f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5e77ead3956445b1600b644bc813699c",
"lib/item_descrizione.dart": "6402cdd303a264771ececaeefce151ce",
"lib/main.dart": "1b5669cef4969a059199998e5f64b8dc",
"lib/info_page.dart": "2acebe06dba5ce250a888d94011be4bd",
"lib/item_domande.dart": "20efe62f29c392cd69a9b1718d798ae2",
"lib/approfondimenti_page.dart": "9021d26758a11efac7ae14bef827794a",
"lib/list_view_test.dart": "7812ffab8a53bcd22c990e3b4b385305",
"analysis_options.yaml": "66d03d7647c8e438164feaf5b922d44a",
"appunti.txt": "41796294c1deddd2066c8f6bf6f2215e",
"build/web/flutter_bootstrap.js": "f14172b2eb5868a0b4ba2787aa647e24",
"build/web/version.json": "93402897272f16a58d2d1e6dab229198",
"build/web/index.html": "e46a67cdeb5a58088ab4567a80043e7b",
"build/web/main.dart.js": "330af1099863640b8b8abb953d99c475",
"build/web/flutter.js": "76f08d47ff9f5715220992f993002504",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"build/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/manifest.json": "5e77ead3956445b1600b644bc813699c",
"build/web/assets/AssetManifest.json": "76fe40fb676675fa00c0fc22514806ed",
"build/web/assets/NOTICES": "1b61113f1bfc5cd9eb87e01f79626291",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/AssetManifest.bin.json": "f841c56bccfdbc12f177e0e801f976d0",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"build/web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/web/assets/AssetManifest.bin": "c1ad3c218f9fa7b263edb90bf63a2c1d",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"build/web/assets/assets/stanza1.jpeg": "a05c20ed93298987eb3057af4186d46e",
"build/web/assets/assets/prova1.jpeg": "6f0321b6e6690c5a6543d0fc4ae459ea",
"build/web/canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"build/web/canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"build/web/canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"build/web/canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"build/web/canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"build/web/canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"build/web/canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"build/web/canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"build/web/canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"build/web/canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"build/web/canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"build/web/canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
".dart_tool/package_config.json": "9b9d060fa41b8f861423a6b138740a4c",
".dart_tool/extension_discovery/README.md": "606241196f08642dcc9f7acef0d2d8da",
".dart_tool/extension_discovery/vs_code.json": "0c29e5d833b7d4b60366dfa7ee9db938",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/web_service_worker.stamp": "aa4761d333540dd222a0ca6627beac9e",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/dart2js.d": "59cb288999d5bb8ecd36655c829e3347",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/web_static_assets.stamp": "5701d0db96bce391ab0583011034a5c9",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/main.dart.js.deps": "2c56a501306bd7b275ca0d0db266d3ea",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/main.dart.js": "330af1099863640b8b8abb953d99c475",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/app.dill": "bf70eccc6eb736be7f25c339bb36be5a",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/outputs.json": "6cb69bcc0165c9851db41d2a4d6a4517",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/web_templated_files.stamp": "b7fa0991d0f1010e3f4ae01c255fbd43",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/web_release_bundle.stamp": "e4ab2a0667a566655ef50d1508a8fa4c",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/flutter_assets.d": "a6a3a53aca15d39721e1d1015d6991b9",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/main.dart": "041427bc152db15a5546cd735c730525",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/dart2js.stamp": "f9a2eb63906eb7efdc82dafefa03b323",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/service_worker.d": "846af4d83273e4a3f7b3a4311acca216",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/web_resources.d": "dbebb030cf295a0b67d1a44cbe23b443",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/app.dill.deps": "d7fbdbdb5aa1cb94a152805dbe6fbb6a",
".dart_tool/flutter_build/091955c9bbc31029181d02dab9918586/web_entrypoint.stamp": "1ff757fae116e8fb4b582629b1cfb40e",
".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/package_config_subset": "f77eb94c4c73f337399b411817be49bc",
".dart_tool/version": "6a9a64e97ab5bb52365b575f4f45b3f9",
"windows/CMakeLists.txt": "06ad93c98e3eb88562d518a073556fc6",
"windows/runner/flutter_window.cpp": "9b92b95a9eecce25e3e9d356688d0cb6",
"windows/runner/utils.h": "c741fb9cddbf3a62f4688b6cca39ddcc",
"windows/runner/utils.cpp": "9b5697b276c8ad67a02ec12ad2c09851",
"windows/runner/runner.exe.manifest": "81f2aed52d431763e83890f3d17da92a",
"windows/runner/CMakeLists.txt": "e99a99b5cc82a168fc557eb23b8d5a96",
"windows/runner/win32_window.h": "5a4cf051798d7e6931ee0405a4523c8f",
"windows/runner/win32_window.cpp": "928e86a2be27eca688669dce6c9177d9",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/resource.h": "c8f809a4f8d3f2f625e358fd90f72fee",
"windows/runner/Runner.rc": "52d91b0faa69a97d99e8939cfa30ef8b",
"windows/runner/main.cpp": "658f453518c9d0a851e7dd09c5496eca",
"windows/runner/flutter_window.h": "79bea736711adda00c49419a39a4a0b4",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/CMakeLists.txt": "0c500410e3259a9a053797dc1c28070e",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
".git/AUTO_MERGE": "e1a365758b34b761be42325bb23c8c1d",
".git/ORIG_HEAD": "3de01cf78bff7b64bdfa6de8684e7cc9",
".git/config": "491e8350622f08e65ca2ee6d7eb6a447",
".git/objects/95/c1c7608eb75ee8d8cc51ce523221a7b2c97765": "f21c4bc4bdfb49e29318edd27808a1d4",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/51/6113a1002f53323e0ac929ab2006bb8cceec5b": "14273cf2ef4a4071ea217ef31f6e9191",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/b2/a0024dfe7b6fc52966c67adf265da3e9e8a9b4": "d7e41499b5373af8e090a24913f6fc8d",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/57e144237264645106f9bb99db9e4d06d3daa1": "17c9a6bee558b1c630b786be8b10551e",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/898030c1c2866e9bedcb3eb73bacdf27fce1de": "2b805ddf52b1122567c7412a16cd0d99",
".git/objects/b3/cfa58f821212c8db9f1c5a70109aea66210771": "015db75683c93dc008863b269118759a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ed/ac05156d4b24a02cde62eb4884c227a2ce77ba": "44ea45d74afe42a78c67fe164c1ce38e",
".git/objects/ec/818d4e6aab770ccd919c8f8fc7da61fd6bad03": "4a55b70b15acf665e9ae991f59487cbf",
".git/objects/27/51dfa0b91ed9d12ee61fda59bb3bf956041a31": "cac179669b82ef996aba378ab19e0e1f",
".git/objects/pack/pack-12679aa249d6663126772cff30d6c9a3b2c42a51.pack": "dfecde7056dab66e8280542931fee24f",
".git/objects/pack/pack-12679aa249d6663126772cff30d6c9a3b2c42a51.idx": "ac9b1117c0dd4bcac6f85b2370182508",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/8ec2cf0c5cdfb3be7514cec725b425d71dafee": "9e5c55b9375cc386cbe4ea7eda28c0c8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/55/03f7eccbe7d7c4709e9ff2fdaed9d2979656fd": "a17c4030ebdecae8e23cc14e4de1e85e",
".git/objects/55/3373b459f9d416f5df75b07292727ce9400648": "f0d5a25aa924fb69c8f096fcb876bb08",
".git/objects/0a/57223e9e3161dd6e199c79f855657cad873461": "84bea6c237ca21aea46c6146f6e43a9b",
".git/objects/0a/2dab2547776235a05cb1ee6df23029be94676a": "c562206fc64da94bf415fcffc5c5b985",
".git/objects/bf/80a72e23aa1331bda9895645cc106fe250032b": "826b353317ae1045ef0c239ee2dfc7c2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/dd25734efc372207c2f9c93a3844ac07ed6673": "b5f8d440c4cc34deaefa5b4fd9c440e6",
".git/objects/ea/1688beb477e79c4b459b12da4879c3502baa0e": "c43c72fa300f7ab379d803e41042e3ca",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/84/7a3224bcec30b5c5724f637f82f895ab966c0f": "c8df539d7ab90504862c816d178dfcd2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8c/682c7b4e3bc48929cb80bfb53c3d217fe6ecf6": "cad078829360d919143a67f14845cff9",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/22/3847c07e42c306ad62086add4865ad15e0ebeb": "5045cc28558c10312e82489280f3380a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c167ebf481c2f76b194c9df603569be",
".git/logs/refs/heads/main": "4dac484649eb35822faea0d7eb7664dd",
".git/logs/refs/remotes/origin/main": "8e81b0299fc4c0d09ec42429f63fa2a9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a8af3b1681de53719de5c80d21898cad",
".git/refs/remotes/origin/main": "a8af3b1681de53719de5c80d21898cad",
".git/index": "a57cdfd50e1a6aa972efe9eee9559e70",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "9f0bc251aa69da846e1d9d561af78a9b",
"assets/stanza1.jpeg": "a05c20ed93298987eb3057af4186d46e",
"assets/prova1.jpeg": "6f0321b6e6690c5a6543d0fc4ae459ea",
"assets/AssetManifest.json": "76fe40fb676675fa00c0fc22514806ed",
"assets/NOTICES": "1b61113f1bfc5cd9eb87e01f79626291",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f841c56bccfdbc12f177e0e801f976d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c1ad3c218f9fa7b263edb90bf63a2c1d",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/stanza1.jpeg": "a05c20ed93298987eb3057af4186d46e",
"assets/assets/prova1.jpeg": "6f0321b6e6690c5a6543d0fc4ae459ea",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
