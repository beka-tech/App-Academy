The Boolean Data Type

The Boolean data type is perhaps the simplest type since there are only two possible values, true and false. However, we'll find booleans very useful because they will act as components of later concepts. As programmers, we'll use booleans to describe the validity of statements. In an abstract sense, "Today is Monday" and "one plus one equals ten" are examples of statements with boolean values. That is, they are either true or false.

When you finish this article, you should be able to:

predict the evaluation of expressions that use the boolean operations of !, ||, and &&
explain DeMorgan's law
Logical Operators
In the long run, we'll be using booleans to establish logic in our code. For this reason, the boolean operators can also be referred to as the logical operators. There are only three such operators:

! (not)
&& (and)
|| (or)
Logical NOT
The not (!) operator will reverse a boolean value:

console.log(!true); // => false
console.log(!false); // => true
console.log(!!false); // => false
It's worth mentioning that ! is a unary operator. This means that the not operation is applied to a single value. This is in contrast to a binary operator such as multiplication, which is applied between two values. It does not make sense to ! two values together.

Logical AND
The and (&&) operator will take two boolean values and will only evaluate to true when both input values are true. Otherwise, it will return false:

console.log(false && false); // => false
console.log(false && true); // => false
console.log(true && false); // => false
console.log(true && true); // => true
Logical OR
The or (||) operator will take two boolean values and will only evaluate to false when both input values are false. Otherwise, it will return true:

console.log(false || false); // => false
console.log(false || true); // => true
console.log(true || false); // => true
console.log(true || true); // => true
Logical order of operations
We can write boolean expressions that consist of multiple logical operations, but we should be aware of the order of operations. JavaScript will evaluate ! then && then ||.

console.log(true || true && false); // => true
console.log(false && !(false || true)); // => false
In general, A || B && C is equivalent to A || (B && C) where A, B, C are booleans.

De Morgan's Law
A common mistake in boolean logic is to incorrectly distribute ! across parentheses. Say we had boolean values of A, B. Here is something to remember:

!(A || B) is equivalent to !A && !B
!(A && B) is equivalent to !A || !B
In other words, to correctly distribute ! across parentheses, we must also flip the operation within parentheses. Beware that:

!(A || B) is not equivalent to !A || !B
!(A && B) is not equivalent to !A && !B
We call this property De Morgan's Law. Shout out to Augustus De Morgan of Great Britain.

What you've learned
!, &&, || are the boolean operators that we can use to establish logic in our code
De Morgan's Law should be used to distribute ! against parentheses
These are just the basics of the type. We'll be seeing more booleans in the upcoming section, so stay tuned for that!
