# RN 0.67 with Fresco patch to disable image downsampling

## Intallation

1. Create a new React Native 0.67 project using this template:

```bash
npx @react-native-community/cli@next init --template=@lytrax/react-native-fresco <ProjectName>
cd <ProjectName>
```

2. Run `fresco-setup` script to clone, checkout Fresco 2.5.0 and patch `DecodeProducer.java`:

```bash
yarn fresco-setup
```

1. Download and unzip/install [Android NDK Revision 23](https://developer.android.com/ndk/downloads). I have downloaded [`android-ndk-r23b-windows.zip`](https://dl.google.com/android/repository/android-ndk-r23b-windows.zip) and unzipped it under `G:\Dev\Android\android-ndk-r23b` on Windows.

2. Create `android/libraries/fresco/local.properties` with the following contents:

```gradle
ndk.dir=G:\\Dev\\Android\\android-ndk-r23b
org.gradle.daemon=true
org.gradle.parallel=true
org.gradle.configureondemand=true
```

Remember to change `ndk.dir` to the actual path that you've installed NDK R23b.

5. Open an Android Emulator and build the app:

```bash
yarn android
```

## Screenshots

| Before patch/build | After patch/build |
|------------------------------------|-------|
|![Before Fresco patch](https://raw.githubusercontent.com/clytras/react-native-fresco/master/doc/RNFrescoBuild_before_patch.png)|![After Fresco patch](https://raw.githubusercontent.com/clytras/react-native-fresco/master/doc/RNFrescoBuild_after_patch.png)|

## Troubleshooting

If you get any errors when debugging regarding Fresco Flipper Plugin, you either comment to disable `flipper-fresco-plugin` inside `android/app/build.gradle`, or build custom Fresco only for release builds.
