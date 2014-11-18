# Nullable

**What**

A tiny javascript wrapper the result which may be undefined or null

**Why**

we have lots of boilerplate code to handle empty value

```javascript
doAsync(function(result) {
    // if result is empty then crap....
    result.forEach(function() {
    });
});

```

```javascript
so we can do this
doAsync(function(result) {
    var result = Nullable(result).def([]).val;
    // if result is empty, then nothing happened
    result.forEach(function(item) {
    });
});
```
