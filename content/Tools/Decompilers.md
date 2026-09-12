

[[Ghidra]]

## .NET:
### ILSpy - Linux CLI tool
[ILSpy - Github](https://github.com/icsharpcode/ilspy)

#### ILSpy installation on Kali:

```shell cmd:$
# make sure you have dotnet installed:

$ wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh
$ chmod +x dotnet-install.sh
$ ./dotnet-install.sh --channel 10.0
# by default, this install into: ~/.dotnet

# add it to shell:
$ export DOTNET_ROOT="$HOME/.dotnet"
$ export PATH="$PATH:$HOME/.dotnet:$HOME/.dotnet/tools"

# check:
$ dotnet --version

# if dotnet is running the old default kali package, you will have to point your shell to the new one you just installed: set the source path in zsh config 
$ echo 'export DOTNET_ROOT="$HOME/.dotnet"' >> ~/.zshrc
$ echo 'export PATH="$HOME/.dotnet:$HOME/.dotnet/tools:$PATH"' >> ~/.zshrc
$ source ~/.zshrc


$ dotnet tool install --global ilspycmd
```

#### ILSpy usage
```shell cmd:$
$ ilspycmd suspicious.exe > suspicious.cs
```


## Java:

jd-gui : linux

apt-get install jd-gui`

‘jd-gui [filename]’ = decompile

## Python2:

https://dogbolt.org/

https://www.decompiler.com/





