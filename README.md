# RN 0.61 with Fresco patch to disable image downsampling

## Intallation

1. Create a new React Native 0.61.5 project using this template:
```
npx @react-native-community/cli@next init --template=@lytrax\react-native-fresco <ProjectName>
cd <ProjectName>
```

2. Run `fresco-setup` script to clone, checkout Fresco 2.1.0 and patch `DecodeProducer.java`:

```
yarn fresco-setup
```

3. Download and unzip/install [Android NDK Revision 19c](https://developer.android.com/ndk/downloads/older_releases.html). I have downloaded [`android-ndk-r19c-windows-x86_64.zip`](https://dl.google.com/android/repository/android-ndk-r19c-windows-x86_64.zip) and unzipped it under `G:\Dev\Android\android-ndk-r19c` on Windows.

4. Create `android/libraries/fresco/local.properties` with the following contents:

```
ndk.dir=G:\\Dev\\Android\\android-ndk-r19c
org.gradle.daemon=true
org.gradle.parallel=true
org.gradle.configureondemand=true
```

Remember to change `ndk.dir` to the actual path that you've installed NDK R19C.

5. Open an Android Emulator and build the app:

```
yarn android
```

## Screenshots

| Before patch/build | After patch/build |
|------------------------------------|-------|
|![Before Fresco patch](https://raw.githubusercontent.com/clytras/react-native-fresco/master/assets/RNFrescoBuild_before_patch.png)|![After Fresco patch](https://raw.githubusercontent.com/clytras/react-native-fresco/master/assets/RNFrescoBuild_after_patch.png)|
