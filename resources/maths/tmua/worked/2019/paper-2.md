# TMUA 2019 Paper 2 Worked Notes

Sources:
- Paper PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f710d_TMUA%202019%20Paper%202.pdf>
- Official worked solutions PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f710e_TMUA%202019%20Paper%202%20Official%20Solutions.pdf>
- Answer key PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f710c_TMUA%202019%20Answer%20Key.pdf>

## Notes
- These notes are generated from the official worked solutions and cleaned into markdown.
- Each section keeps the official answer option and a cleaned version of the official reasoning.

## Q1
Answer: `E`

Work:
- We need the coefficient of x2 in the bracketed term to get the term in x4 in the whole expansion. We expand this using the binomial theorem to get ! 1 6          2 2 2 6 6 5 1 6 4 1 x 2x + = x (2x) + (2x) + (2x) + ··· . x 1 x 2 x
- We stop here as the power of x in this last term is x4-2 = x2 , as we require. This term is then    2 6 4 1 x2 (2x) = 15x2 .16x4 .x-2 2 x = 240x4
- so the answer is E.
- c UCLES Page 3

## Q2
Answer: `C`

Work:
- Since 2x + 1 = 2(x + 21 ) is a factor of f(x) = 2x3 + px2 + q, it follows that f(- 21 ) = 0. Similarly, f(2) = 0. Substituting these values in to f(x) gives
- 2(- 12 )3 + p(- 12 )2 + q = 0 2(2)3 + p(22 ) + q = 0
- so
- - 14 + 41 p + q = 0 16 + 4p + q = 0
- Multiplying the first equation by 16 gives
- -4 + 4p + 16q = 0.
- Subtracting 16 + 4p + q = 0 from this gives -20 + 15q = 0, so q = 43 , hence 4p = -16 - q = - 52 3 . 26 4 22 Therefore 2p + q = - 3 + 3 = - 3 , which is option C.
- c UCLES Page 4

## Q3
Answer: `A`

Work:
- It might be tempting to divide by a to get b = c, but a might be zero, and we cannot divide by zero. Instead, we can rearrange and factorise to get ab - ac = 0, so a(b - c) = 0. From this, we can deduce that a = 0 or b - c = 0 (or both).
- I This might not be true; we could have b = c instead.
- II This might not be true; we could have b = c = 1, for example.
- III This might not be true; we could have a = 0 instead.
- So the correct answer is A.
- c UCLES Page 5

## Q4
Work:
- A counterexample with have the antecedent (“N is a positive integer that consists of the digit 1 followed by an odd number of 0 digits and then a final digit 1”) true, and the consequent (“N is a prime number”) false. We can now check each of the three offered values of N :
- I The form of N is correct: there is 1 zero, and 1 is odd, so the antecedent is true. However, the consequent is also true, so this is not a counterexample.
- II The form of N is not correct, as there are 2 zeros, so the antecedent is false. Hence this is not a counterexample.
- III The form of N is correct, as there are 3 zeros, and the consequent is false, as N is not prime. Hence this is a counterexample.
- The correct solution is D.
- c UCLES Page 6

## Q5
Work:
- Saying that ‘either a or b is divisible by n’ is necessary for (∗) is the same as saying that if ab is divisibly by n, then either a or b is divisible by n. We can look for a counterexample or proof for this assertion. On the surface of it, it seems surprising: when a product is divisible by a number, why should one of the two factors also be? We know something similar to this for a product which equals zero, and we may know that if a product is divisible by a prime, then one of the factors must be. But there is no mention of zero or primes here. So let us try a simple example where n is not prime, such as n = 4 (the smallest non-prime other than 1). Then the statement becomes: if ab is divisible by 4, then either a or b is divisible by 4. A small amount of exploration finds counterexamples, such as a = 2, b = 2 or a = 6, b = 2. So the condition is not necessary for (∗). What about sufficiency? Saying that ‘either a or b is divisible by n’ is sufficient for (∗) is the same as saying that if either a or b is divisible by n, then ab is divisibly by n. We can again look for a counterexample or proof for this assertion. This time, though, a proof is clear: if a is divisible by n, then a is a multiple of n, so ab is also a multiple of n (as b is an integer). This means that ab is divisible by n. The same is the case if b is divisible by n, so the condition is sufficient. The correct answer is therefore B.
- c UCLES Page 7

## Q6
Work:
- The following is just one approach to checking an argument. We start by checking the final solutions on line (VI). x = 0 makes the LHS (left hand side) equal 1 but the RHS (right hand side) equal -1, so the attempt cannot be correct. Furthermore, this is not a value of x for which tan x is undefined, so G is not the correct answer. We must then identify where the error arose. We can now test the incorrect solution x = 0 at various stages of the argument to see where things first go wrong. Rather than working line-by-line, we start about half way through to see whether the mistake happens in the first half of the argument or the second half; this is a little more efficient. Let us try the incorrect solution x = 0 in line (III) (which is midway between (I) and (V)): this gives -1 = -1 or -1 = -1, so x = 0 is valid at this point. This tells us that the error must occur on line (I), (II) or (III). On line (I), x = 0 gives 1 = -1, while on line (II), x = 0 gives (-1) × (-1) = -1. So it is most likely that the first error occurs on line (III). We check the algebra on line (I): all that has happened is that 2 sin x has been subtracted from both sides, so this is correct. We likewise check the algebra on line (II): by multiplying out the brackets, we get the equation on line (I), so this is correct. (We might be concerned about the case cos x = 0 here, but this is not possible on either line (I) or line (II) because of the tan x terms on each line.) Finally, we are left with line (III). The implication here is that because two numbers multiply to give -1, one of them must be -1. This would be true if we were dealing with integers, but we are not, so this is an invalid implication. The correct solution is therefore D: the first error occurs on line (III).
- c UCLES Page 8

## Q7
Work:
- We work through these in turn:
- A A counterexample here is a case for which the antecedent (the ‘if’ part) is true but the consequent (the ‘then’ part) is false. In this case, taking a = 12, b = 16, c = 20 to match 122 + 162 = 202 does not satisfy the antecedent, as they do have a common divisor of 4. Even if we were to divide all three by 4 to get 32 + 42 = 52 , we would still not have a counterexample, as two of them are odd and the other is even. (The statement is actually true, so there are no counterexamples.)
- B A counterexample in this case is an example to show that there is a solution. Since 16 = 42 , we can rewrite 122 + 162 = 202 as 44 + 122 = 202 , so this does provide a counterexample.
- C Since neither 12 nor 20 is a perfect square, we cannot use this fact to obtain a counterexample. (And that is quite a relief, since Fermat proved that this statement is true! It is the simplest case of Fermat’s Last Theorem.)
- D We note that 122 + 162 = 202 satisfies the antecedent, but as 16 is the arithmetic mean of 12 and 20, this does not provide a counterexample. (The statement is false, and a counterexample is 52 + 122 = 132 .)
- The correct answer is therefore B.
- c UCLES Page 9

## Q8
Answer: `E`

Work:
- When thinking about inequalities involving negative numbers, we must take care to reverse the sign of any inequality when multiplying or dividing by a negative number. In this case, all three of a, b and c are negative.
- I We start with a < b < c and multiply by a < 0 to obtain
- a2 > ab > ac
- so this statement must be true.
- II Since a < 0 and c < 0, a + c < 0. Since b < 0, it follows that b(a + c) > 0. So this statement must be true.
- III We start with c > a (since a < c). Dividing by b < 0 then gives c a < b b and so this statement must be false.
- The correct answer is E.
- c UCLES Page 10

## Q9
Answer: `D`

Work:
- If the next person must sit next to someone, there cannot be three spaces between one person and the next. But if there are only two spaces between them, someone sitting down in one of those spaces must sit next to someone. So the smallest number of people will be achieved when all of the gaps are exactly two spaces, except perhaps for the final person to the first person. So counting the seats around the table as 1, 2, 3, . . . , we place people in seats 1, 4, 7, 10, . . . , 37, 40. (The final person is sitting immediately next to the first person, but that does not matter.) There are 14 seats in this list, so the answer is D.
- c UCLES Page 11

## Q10
Work:
- We sketch a quadrilateral for ease of reference.
- R
- S
- P Q
- A The sides P Q and SR are equal in length, which is certainly necessary if P QRS is a parallelogram, and P S being parallel to QR is also necessary. If these are both the case, then on first glance it may seem that P QRS must be a parallelogram. However, if we draw two parallel lines and ask how we can join them with two equal-length sides. We discover there are two ways:
- S R S R
- P Q P Q
- So this condition is necessary but not sufficient.
- B As before, P Q = SR is necessary, and P Q being parallel to SR is obviously necessary, so the whole condition is necessary. Unlike in the previous part, though, this is also sufficient: if two sides of the quadrilateral are both equal and parallel, the remaining two sides must also be equal and parallel. (This may seem obvious, and it can be proven using geometric or vector methods; see below for details.)
- C This condition is not necessary, as not all four sides of a parallelogram need to be the same length. It does mean that the parallelogram is a rhombus, so it is a sufficient condition.
- D The diagonals of a parallelogram need not be equal in length, so this is not a necessary condition. It is also not sufficient.
- The correct answer is therefore A.
- We now give two proofs that condition B is sufficient, that is, if P Q = SR and P Q is parallel to SR, then P QRS is a parallelogram. --→ -→ We first give a vector proof. Since P Q = SR and they are parallel, P Q = SR; we call this -→ vector a. Let P S = b, as shown in this diagram:
- c UCLES Page 12
- S a R
- b
- P a Q
- Then --→ --→ -→ -→ QR = QP + P S + SR = (-a) + b + a = b --→ -→ so QR = P S, showing that P S and QR are equal and parallel, and thus P QRS is a parallelogram.
- And here is a geometric approach. We are given that P Q = RS and that they are parallel. Draw in the diagonal QS, as shown.
- S R
- P Q
- Then ∠P QS = ∠RSQ as they are alternating angles. Therefore triangles P QS and RSQ are congruent by side-angle-side, as P Q = RS (given), QS = SQ (common side) and ∠P QS = ∠RSQ. Thus ∠QSP = ∠SQR, so SP is parallel to QR (by alternating angles) and P S = RQ. Hence P QRS is a parallelogram.
- c UCLES Page 13

## Q11
Answer: `A`

Work:
- Let the first term of the series be a and the common difference be d, as usual. Therefore we have 2 n(2a + (n - 1)d) = 20.
- Multiplying by 2 gives n(2a + (n - 1)d) = 40, so we need to find integers n, a and d which satisfy this. We list values of n which are factors of 40 and the corresponding value of 2a + (n - 1)d.
- n 2a + (n - 1)d 1 40 = 2a 2 20 = 2a + d 4 10 = 2a + 3d 5 8 = 2a + 4d 8 5 = 2a + 7d 10 4 = 2a + 9d 20 2 = 2a + 19d 40 1 = 2a + 39d
- With this table to hand, we consider the possibilities for each of the statements.
- I n = 1 gives a = 20, which is even. n = 2 gives 2a + d = 20. If we take d = 2, this gives a = 9, and indeed 9 + 11 = 20, so this statement need not be true.
- II The table shows that we could have n = 1 and a = 20, or n = 5, a = 2, d = 1, giving 2 + 3 + 4 + 5 + 6 = 20. So this statement need not be true.
- III The example in the previous part, 2 + 3 + 4 + 5 + 6 = 20 shows that this is not necessarily true.
- Therefore the correct answer is A.
- c UCLES Page 14

## Q12
Answer: `F`

Work:
- One way to answer this question is to draw a tree diagram and to work out the probabilities of the three events. Another way is to reason as follows. If all three students study Mathematics, then certainly the second student chosen studies Mathematics and at least one of the students chosen studies Mathematics. Therefore T < S and T < R. Likewise, if the second student chosen studies Mathematics, certainly at least one of the students chosen studies Mathematics. Therefore S < R. Putting these together gives T < S < R, and the answer is F.
- c UCLES Page 15

## Q13
Answer: `D`

Work:
- It will help us to draw a sketch of this situation, remembering that we do not know that values of a and b. The exact shape of the graph does not matter; the only thing that is important for this question is that it is symmetrical about the y-axis, since sin2 (-x) = (- sin x)2 = sin2 x.
- y
- x a b
- R -a 2 I We can now add to our sketch the trapezium rule calculation for the integral -b sin x dx:
- y
- x -b -a a b
- We see that the strips are just a reflection of the original 4 strips. Since the original approximation was an overestimate, this approximation is also an overestimate.
- II We note that cos2 x is related to sin2 x by the identity sin2 x + cos2 x = 1, so cos2 x = 1 - sin2 x. Thus the graph of y = cos2 x is a reflection of the graphR of y = sin2 x in the line b y = 21 (why?). Therefore the sketch of the graph and trapezia for a cos2 x dx is:
- y
- x a b
- Since cos2 x = 1 - sin2 x, we can also draw on the original trapezia, coming down from the line y = 1:
- y
- x a b
- c UCLES Page 16
- Rb We can see from this sketch that the blue and red trapezia exactly sum to a sin2 x dx + Rb 2 a cos x dx; since the blue trapezia give an overestimate, the red ones must give an underestimate. Hence this statement is also necessarily true.
- Therefore the correct answer is D.
- c UCLES Page 17

## Q14
Answer: `B`

Work:
- A necessary condition is one which must follow. To show that a condition is not necessary, we need to exhibit a counterexample, while to show that a condition is necessary, we need to give a justification.
- I If p(x) is increasing for a ≤ x ≤ b, the value of the polynomial is not decreasing in this interval, so we must have p(a) ≤ p(b), and this is therefore a necessary condition.
- II A quadratic such as p(x) = 9-x2 provides a counterexample: it is increasing for -3 ≤ x ≤ 0, but p(-3) > 0 while p(0) = 0. Hence this is not a necessary condition.
- III It is not clear why this should be the case, and we need to look beyond quadratics (as p00 (x) is constant for every quadratic). Let us see if we can construct a counterexample. Let us take p00 (x) = -x, so that it is decreasing. Then p0 (x) = - 21 x2 + c, giving p(x) = - 16 x3 + cx. (There is a further constant of integration here, but we can choose it to be zero, as it has no impact on where p(x) is increasing.) If we now choose some c > 1, then p0 (x) will be positive for 0 ≤ x ≤ 1, so p(x) will be increasing there, yet p00 (0) < p00 (1). Therefore this condition is not necessary.
- Another way of thinking about this is: to say that p(x) is increasing for a ≤ x ≤ b only tells us about the function values; it does not tell us anything about the derivatives, so neither II nor III could possibly be necessary conditions. Either way, the correct answer is B.
- c UCLES Page 18

## Q15
Answer: `B`

Work:
- We expand the expressions using the logarithm rules, namely log(ab) = log a + log b and log an = n log a when a > 1. This gives
- log a + 2 log b + log c = 7 2 log a + log b + 2 log c = 11 2 log a + 2 log b + 3 log c = 15
- This is a set of simultaneous equations! If we write A = log a, B = log b and C = log c, they become
- A + 2B + C = 7 (1) 2A + B + 2C = 11 (2) 2A + 2B + 3C = 15 (3)
- Subtracting (3) - (2) and (3) - 2 × (1) to eliminate A gives
- B+C =4 (4) -2B + C = 1 (5)
- Subtracting these then gives 3B = 3 so B = 1 (and thus C = 3, A = 2). Therefore log b = 1, so the base of logarithms is b (and also a = b2 , c = b3 ). The correct answer is option B.
- c UCLES Page 19

## Q16
Work:
- For the quadratic to intersect the x-axis at two distinct points, we require the discriminant to be positive. In this case, this gives q 2 - 4p2 > 0.
- We can either deduce the correct graph by solving this inequality, or decide between the given options by checking various points. We show both approaches here. First, we can write the inequality as (q - 2p)(q + 2p) > 0. Therefore, this inequality holds when either q - 2p > 0 and q + 2p > 0, or when q - 2p < 0 and q + 2p < 0. The first case gives q > 2p and q > -2p. As p > 0, this simplifies to q > 2p. The second case gives q < 2p and q < -2p, which simplifies to q < -2p. So the solution is q > 2p or q < -2p, and this is shown in graph F. Alternatively, we can check values of p and q. When p = 1, q = 0, q 2 - 4p2 = -4 < 0, so this point cannot lie in the region. This eliminates options A, C, E and G. Next, we test a point with q < 0, say p = 1, q = -4. This gives q 2 - 4p2 = 12 > 0, so this point is in the region. This eliminates options B and D, so we are left with F or H. Finally, we can check a point which distinguishes the two, say p = 2, q = 3, which gives q 2 - 4p2 = -7 < 0, so this point is not in the region. Therefore the correct answer is graph F.
- c UCLES Page 20

## Q17
Answer: `A`

Work:
- As exactly one of the options was correct, if option X is implied by option Y, then option Y cannot be correct (as then option X would also be correct). Option A implies option B: if A is correct, then the statement is true if and only if x > 1, which means the statement is true if x > 1 and the statement is true only if x > 1, so option B is also correct. Therefore option A cannot be the correct option. For the same reason, option C cannot be correct, as it implies option D. We must therefore consider options B and D. Let us assume that option B is correct and ask whether option D follows from it. Option B tells us that whenever x > 1, the statement is true, so certainly whenever x > 2, the statement is true. Therefore option D follows from option B, and option B cannot be the correct option. The opposite direction does not follow, though: the statement could be true for all x > 2, but be false for x = 32 , for example. Therefore the correct option must have been option D.
- c UCLES Page 21

## Q18
Answer: `A`

Work:
- We would do well to sketch a graph for this question! There are two functions involved, y = a|x| + 1 and y = |x - 2|, so we sketch these for different values of a. The graph of y = a|x|+1 is the graph of y = |x| first stretched by a factor of a in the y-direction, and then translated by 1 in the positive y-direction. The graph of y = |x - 2| is the graph of y = |x| translated by 2 in the positive x-direction. This gives us the following sketch:
- y
- a=2
- x
- a = -2
- What we can see from this sketch is that y = a|x| + 1 will be below y = |x - 2| when a is sufficiently negative; when a is positive, it will certainly intersect the graph of y = |x - 2|. We can find the value of a at which the behaviour changes by sketching the graph at this point and then doing some algebra:
- y
- x
- c UCLES Page 22
- We can work out the value of a by noting that the graph passes through (2, 0):
- a|2| + 1 = 0
- therefore a = - 12 , and hence the correct answer is a ≤ - 12 , which is option E.
- c UCLES Page 23

## Q19
Answer: `E`

Work:
- This is a rather ugly looking expression! Let us consider the first square root to begin with: q 8-4 2+1 p sqrt We could simplify this to 9 - 4 2, but it seems likely that the examiners have written it in this way to help us. One way to approach this question is to square the given expression, see what comes out, and then compare the answer with the squares of the given options. We will try this approach below. Another approach sqrt is to see if we can write the inside of the squaresqrtroot as the square of something. We have 8 = (2 2)2 and 1 = 12 , which suggests sqrt that we try 2 2 + 1. But as the middle term has a minus sign, we should actually try 2 2 - 1. Squaring this gives sqrt 2 sqrt 2 2-1 =8-4 2+1
- and so sqrt sqrt q 8 - 4 2 + 1 = 2 2 - 1. It is important that we take the positive square root; since 2 2 > 1, this is the positive square root. Similarly, sqrt sqrt q 9 - 12 2 + 8 = 3 - 2 2, where again we note that 3 > 2 2, so this is the positive square root. These sum to 2, and hence the answer is E.
- The alternative approach was to square the given expression. Writing it as sqrt sqrt q q 9 - 4 2 + 17 - 12 2
- we can square it to get sqrt sqrt q sqrt  sqrt  9 - 4 2 + 17 - 12 2 + 2 9 - 4 2 17 - 12 2 sqrt sqrt sqrt q = 26 - 16 2 + 2 153 - 68 2 - 108 2 + 96 sqrt sqrt q = 26 - 16 2 + 2 249 - 176 2
- Unfortunately, we are now left in an even worse situation than we startedsqrtwith, as we have sqrt to find sqrt this square root; can we find a and b with (a2b 2) some way of simplifying sqrt =2 249 - 176 2? It turns out that 11-8 sqrt 2 does the job; this, however, is negative (as 11 < (8 sqrt 2) ), so sqrt the positive square root is 8 2 - 11. Thussqrtthe whole expression simplifies to 26 - 16 2 + 2(8 2 - 11) = 4, and so the correct solution is 4 = 2, which is option E. The first approach was certainly simpler.
- c UCLES Page 24

## Q20
Answer: `B`

Work:
- Commentary: It could be helpful for this question to take a piece of paper and physically move it around following the given instructions to get a feel for what’s going on. This suggests that we may be looking for a periodic function. We could then try to see what happens with a sine or cosine function, but these turn out to have too much symmetry, and could lead us to the wrong answer. A tan graph is periodic, but does not have line symmetry, so is likely to be better for our needs. With all of this, though, we might still get ourselves in quite a muddle, so beginning with an algebraic approach is likely to be more successful.
- When we reflect the graph of y = f(x) in the y-axis, we obtain the graph of y = f(-x). When we translate this by 2 units in the negative x-direction, we obtain the graph of y = f(-(x + 2)), so g(x) = f(-(x + 2)) = f(-x - 2). Similarly, when we translate the graph of y = f(x) by 2 units in the negative x-direction, we obtain the graph of y = f(x + 2). When we reflect this in the y-axis, we obtain the graph of y = f(-x + 2), so h(x) = f(-x + 2). If the functions g(x) and h(x) are identical, then we require
- f(-x - 2) = f(-x + 2) for all x.
- This is quite close to what we want, so let us let u = -x - 2, so that -x + 2 = u + 4. Then the above becomes f(u) = f(u + 4) for all u, which is option B, just with x replaced by u. This means that the function is periodic with a period of 4 (though it may have a smaller period such as 2 or 71 , as long as it repeats every 4).
- c UCLES Page 25

## Answer Summary

`1E 2C 3A 8E 9D 11A 12F 13D 14B 15B 17A 18a 19E 20B`
