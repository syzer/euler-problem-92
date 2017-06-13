# WAT 
Problem statement
[https://projecteuler.net/problem=92]()


```
A number chain is created by continuously adding the square of the digits in a number 
to form a new number until it has been seen before.

For example,

44 → 32 → 13 → 10 → 1 → 1
85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. 
What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

How many starting numbers below ten million will arrive at 89?
```

# Install
Haskell required
```bash
brew install haskell
```

# How

```bash
ghci
:load euler92.hs 
numbers  85
[8,5]

>chain 85
89
>chain 42
20
> stop 42
89
>map stop [1..100]
[1,89,89,89,89,89,1,89,89,1,89,89,1,89,89,89,89,89,1,89,89,89,1,89,89,89,89,1,89,89,1,1,89,89,89,89,89,89,89,89,89,89,89,1,89,89,89,89,1,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,1,89,1,89,89,89,89,89,89,89,89,1,89,89,1,89,89,89,1,89,89,89,89,1,89,89,1,89,89,1,89,89,1]
# calc up to 100
>calc 100
80

>calc 10000000
...
8581146


>fastCalc 200
168



```

## Compiling
```bash
ghc -O2 --make euler92
```
./euler92 
