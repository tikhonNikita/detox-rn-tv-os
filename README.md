This repo contains the basic setup of Detox, react-native-tv-os.
Also, the @react-native-community/netinfo library was included to demonstrate build failure.
Steps to reproduce build issue. This command will fail.
```sh
detox build --configuration android.emu.debug
```


To run simple test run
```sh
detox test --configuration android.emu.debug
```

If we remove this library from the package.json 
> @react-native-community/netinfo 
 
the build step will work, and we will be able to execute the detox test command.


