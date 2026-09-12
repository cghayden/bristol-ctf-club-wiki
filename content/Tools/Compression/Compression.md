[[7Zip]]
[[zip]]
[[gzip]]

[[tar]] - *combine many files into one, and preserves filesystem metadata such as permissions, ownership, timestamps, and symlinks.
It does not compress*


```
#compress in place: 
sudo tar --use-compress-program=zstd -cf seclists.tar.zst seclists

#restore:
sudo tar --use-compress-program=zstd -xf seclists.tar.zst

```
### gzip + tar :
.tar.gz
- Maximum compatibility - cross-platform sharing:


- **gzip** = “old, slow but everywhere”, universal
- **zip** = “Windows-friendly convenience tool”, universal
- **zstd** = “modern, fast, better compression”,  native on Linux, optional on macOS, usually missing on Windows

- **tar** = “put everything in one box”, universal
