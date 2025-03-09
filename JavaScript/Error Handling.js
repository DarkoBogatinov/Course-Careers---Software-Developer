const x = 2;

try {
    console.log("try");
    x.toUpperCase();
    console.log("success");
} catch {
    console.log("recovery");
}

console.log("hello");

try {
    console.log("try");
    x.toUpperCase();
    console.log("success");
} catch (err) {
    console.log(err.message, err.name);
} finally {
    console.log("finally");
}

try {
    console.log("try");
    console.log("success");
} catch (err) {
    console.log(err.message, err.name);
} finally {
    console.log("finally");
}

try {
    console.log("try");
    throw "this is an error";
} catch (err) {
    console.log(err);
} finally {
    console.log("finally");
}