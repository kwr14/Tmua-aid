# TMUA 2018 Paper 2 Worked Notes

Sources:
- Paper PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7112_TMUA%202018%20Paper%202.pdf>
- Official worked solutions PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7113_TMUA%202018%20Paper%202%20Official%20Solutions.pdf>
- Answer key PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7111_TMUA%202018%20Answer%20Key.pdf>

## Notes
- These notes are generated from the official worked solutions and cleaned into markdown.
- Each section keeps the official answer option and a cleaned version of the official reasoning.

## Q1
Answer: `C`

Work:
- We first simplify the fraction using index laws:
- x3 - 4x f(x) = sqrt 2 x x3 - 4x = 1 2x 2 1 25 1 = 2 x - 2x 2
- so 3 1 f 0 (x) = 45 x 2 - x2 Substituting x = 4 then gives
- f 0 (4) = 54 × 8 - 12 = 10 - 12 = 9.5
- and so the answer is C.

## Q2
Answer: `B`

Work:
- The constant term is the one with x0 . The expansion is
- 1 k 1 12           6 12 12 6 11 1 12 6 12-k (x ) + (x ) - 2 + ··· + (x ) - 2 + ··· + - 2 1 x k x x
- (This notation for binomial coefficients is much clearer than the older n Cr notation, and is recommended.) The kth term is therefore       12 6(12-k) k -2k 12 k 6(12-k)-2k 12 x (-1) x = (-1) x = (-1)k x72-8k k k k
- The value of k which makes the power zero is therefore k = 9, so the constant term is     12 12 12 × 11 × 10 (-1)9 = - =- = -2 × 11 × 10 = -220 9 3 3×2×1     n n where we have used = to simplify the calculation. Thus the answer is B. k n-k
- Commentary: We have used k here (beginning our counting with k = 0). You might prefer to use another letter such as r.

## Q3
Answer: `F`

Work:
- A counterexample to this statement is an example which shows that it is not true. So we consider the journeys described, and determine whether or not the average speed for the whole journey is, indeed, 12 (u + v). Perhaps the simplest way to do this is to make a table. We know that average speed is distance travelled divided by time, so we will need these for each part of the journey. Filling in the information given, we end up with the following. We write d1 , d2 and D for the distances (in km) in the first part, second part and total, respectively. Likewise, t stands for time (in h), and we use V for the average speed for the whole journey (in km/h).
- First part Second part Overall d1 t1 u d2 t2 v D T V I 100 50 100 40 II 1 50 1 40 III 80 50 100 40
- We can now use u = d1 /t1 and so on to fill in the rest of the first and second part of the journey, and then sum the distances and times for the overall journey. We can finally calculate the average speed. This gives:
- First part Second part Overall d1 t1 u d2 t2 v D T V I 100 2 50 100 2.5 40 200 4.5 9 II 50 1 50 40 1 40 90 2 45 III 80 1.6 50 100 2.5 40 180 4.1 41
- In every case, 12 (u + v) = 45 so both I and III are counterexamples (as the fractions cannot be simplified, so they cannot equal 45), and the answer is F.

## Q4
Answer: `D`

Work:
- It is worth sketching a graph of y = cos x to understand the meaning of the stated condition. Two lines have been drawn corresponding to different values of c.
- y
- x 1 pi 3 0 2pi 2pi 2pi
- For there to be two solutions for 0 < x < 32 pi, we see from the sketch that we need -1 < c < 0 We now consider the equation cos2 2x = c2 , so cos 2x = ±c There are two straightforward approaches. The first is to sketch the graph of y = cos 2x and look at 0 < x < 32 pi; the second is to note that the range can be written as 0 < 2x < 3pi, so we could write u = 2x and look for solutions to cos u = ±c in the range 0 < u < 3pi. We will use the first approach here; the second is very similar. Here is a sketch of y = cos 2x:
- y -c x 1 pi 3 0 2pi 2pi 2pi c
- We immediately see that, for 0 < x < 32 pi, there are six solutions to our equation, so the correct answer is D.

## Q5
Answer: `A`

Work:
- Commentary: With a question such as this, it is very wise to try drawing a sketch. We are told that the two diagonals of Q are perpendicular, so it makes sense to start by drawing the two diagonals.
- If statement I is necessarily true for Q, it means that it is always true, no matter how we choose to draw Q (subject to the condition that it has perpendicular diagonals), and likewise for statement II. We could therefore either try proving these statements or start by looking for counterexamples. Following the above comments, we start by drawing two perpendicular lines, and mark vertices on them with the aim of finding a counterexample to each statement. This turns out not to be that difficult after some playing around. To make a diagonal not be a line of symmetry, we simply need the off-diagonal vertices to be different distances from the diagonal. So this will do it:
- For II, to make the midpoints of the sides not be the vertices of a square, we can make the quadrilateral be “long and skinny”:
- So neither I nor II is necessarily true, so the correct answer is A.
- Commentary: It turns out that the midpoints of the sides of Q are always the vertices of a rectangle, and for a general quadrilateral, they are always the vertices of a parallelogram, with sides parallel to the diagonals of the original quadrilateral.

## Q6
Work:
- A counterexample to an ‘if P then Q’ statement is an example where the statement is false, that is where P (the antecedent) is true but Q (the consequent) is false. We can now look through the given functions to see which of them satisfies these requirements. We give our results as a table and make comments on the working below.
- f(x) f 0 (x) f 0 (x) > 0 f(x) > 0 for all x for all x A x2 + 1 2x false B x2 - 1 2x false C x3 + x + 1 2 3x + 1 true false D 1-x -1 false E 2x ? true true
- Once we know that f 0 (x) > 0 for all x is false, there is no need to go any further, so for A, B and D, we stop at this point. For C, 3x2 ⩾ 0 for all x, so 3x2 + 1 ⩾ 1 > 0 for all x, and we know that cubics (x3 + x + 1 in this case) always take both positive and negative values, so f(x) > 0 for all x is false. For E, we don’t know what the derivative of 2x is (or at least, knowledge of it is not required for this test), but we do know that 2x is increasing for all x, so the derivative is positive for all x. Finally, only C has the antecedent true and the consequent false, so C provides a counterexample.

## Q7
Answer: `B`

Work:
- We can list the terms of the two sequences to get a feeling for what is going on: Sequence 1: 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, . . . Sequence 2: 2, 7, 12, 17, 22, 27, 32, 37, 42, . . . We see that the first two common terms are 17 and 32; the next will be 47, and the common terms are forming an arithmetic progression with first term 17 and common difference 15. (Note that 15 is the lowest common multiple of 3 and 5.) Therefore the 20th such number, N is 17 + 19 × 15 = 17 + 285 = 302. Finally, dividing 302 by 7 gives 43 remainder 1, so the answer is B.

## Q8
Answer: `D`

Work:
- I Every valid code begins with a ‘U’ and ends with a ‘D’, so the reverse code begins with a ‘D’, meaning it immediately dips below sea level. So it is never a valid code, and this statement is false.
- II As with I, the first letter of this substituted code will always be ‘D’, which will never give a valid code, so this statement is false.
- III The new ‘U’ at the beginning of the code and ‘D’ at the end mean that the whole middle part of the profile is lifted one unit higher than the original profile. So this will never dip below sea level, and will always be a valid code. So this statement is true.
- Therefore the correct answer is D.

## Q9
Work:
- Given the choices, we first check to see what the proposed solutions x = 58 and x = 52 work in the original equation. q When x = 8 the left side is 4 × 8 × 2 × 85 - 1 = 54 and the right side is 10 × 58 - 5 = 54 so this 5 5
- is a valid solution. q When x = 2 the left side is 4 × 2 × 2 × 52 - 1 = 20 and the right side is 10 × 25 - 5 = 20 so 5 5
- this is also a valid solution. This therefore eliminates options B, C and D. There may, though, be additional solutions. Let us work through the argument step-by-step, looking for steps which are not reversible; these are often the cause of errors when attempting to solve equations. Step (I) is just factorising the right hand side, so is fine. Step (II) involves squaring. In general, squaring an equation is not reversible, as we do not know whether to take the positive or negative square root when going backwards. However, if we do have a solution to the original equation, it will still be a solution when we square it; the worst that can happen is that we introduce new solutions. Since the two solutions found do work, this step is fine, as is the conclusion (though the author of the attempt should have checked that this is the case). Step (III) involves dividing by 2x - 1. But what if this is zero? In that case,qwe would have x = 12 . Trying this in the original equation makes the left hand side 4 × 21 × 2 × 21 - 1 = 0, while the right side is 10 × 12 - 5 = 0. So x = 12 is another solution. The correct option is therefore F. (The remaining steps are rearrangements, and are all valid.)

## Q10
Work:
- It would help to sketch a graph which has reflection symmetry in x = a. We should pick a value of a which is not zero. Let us pick a positive value of a. We can draw a quadratic with vertex at x = a, for example.
- y
- x a
- We now consider the three conditions and see which are certainly not necessary for the reflection symmetry by looking at this example. We mark on x, a ± x and 2a - x for a value of x which is not equal to a, where we have chosen x ≈ 1.5a:
- y
- x a - x2a - x a x a+x
- It seems from this sketch that f(x) and f(2a - x) are likely to be equal, as are f(a + x) and f(a - x). So we reject condition III, leaving us with conditions I and II to consider. For a graph y = f(x) to be symmetrical about x = a, we need the value of the function to be equal whenever we go the same distance to the right or left of x = a. Looking at this sketch, let’s take the distance to be x. Then we need f(a + x) = f(a - x) for every choice of x if the graph is symmetrical about x = a, so condition I is necessary. But it is also sufficient, for how could a graph not be symmetrical? Only if for some x, the function values are different at a + x and a - x. For condition II, we can do the same. This time, the values we want to consider are 2a - x and x. Now 2a - x is x - a to the left of a (assuming that x > a) and x is x - a to the right of a, so these are the same distance from a, and again this condition is necessary. Since every distance can be written as x - a for some choice of x, the condition is also sufficient. So both conditions I and II are necessary and sufficient, and the correct option is B.

## Q11
Work:
- We sketch the graph of y = 2x . We know that y = mx + c is a straight line with gradient m and a y-intercept of c, and we will imagine this line for different values of m and c. Solutions to the equation 2x = mx + c correspond to the x-coordinates where these two graphs meet.
- y
- x
- I Recall that ‘P only if Q’ is the same as saying ‘if P then Q’, so in this case, the statement becomes ‘if the equation 2x = mx + c has a negative real solution, then c > 1’. But we see that the line y = -x, with c = 0, has a solution with negative real x, so this statement is false.
- II We can rewrite this statement as ‘if c > 1 then the equation has two distinct real solutions’. So we imagine straight lines passing through some point above (0, 1), and we see that if this straight line has a negative gradient, then it can only intercept the curve once. So this statement is false.
- III If c ⩽ 1, then a line with a negative gradient will still only intercept the curve once, so this is also false.
- Therefore none of the statements is true, and the correct option is A.

## Q12
Answer: `H`

Work:
- The negation of ‘for any N , P ’ is ‘there exists N such that not P ’. So none of options A-D can be a negation of the original statement, but all of E-H still have the potential to be. In this case, the statement P is ‘there is a postiive integer K such that N (Km + 1) - 1 is not prime for any positive integer m’; this is a statement of the form ‘there exists’, and we wish to negate it. The negation of ‘there exists K such that Q’ is ‘for all K, not Q’, so we are looking for a statement which continues with ‘for all positive integers K’, and this eliminates option H. (‘For any’ and ‘for all’ are equivalent ways of expressing this.) So we are now looking at options E, F and G. The statement Q that we wish to negate is ‘N (Km + 1) - 1 is not prime for any positive integer m’, which we can rewrite with the quantifier (‘for any’) at the start of the statement to give ‘for any positive integer m, N (Km + 1) - 1 is not prime’. And the negation of ‘for all m, R’ is ‘there exists m such that not R’, which in this case is ‘there exists a positive integer m such that it is not the case that N (Km + 1) - 1 is not prime’, so option G is not correct. Now ‘not not S’ is equivalent to S, so this becomes ‘there exists a positive integer m such that N (Km + 1) - 1 is prime’. The only option which matches this is option F, and this is therefore the correct answer.

## Q13
Answer: `F`

Work:
- Commentary: One thing we can do when faced with a question like this it to first try different values of θ to see whether the conjecture appears to be true or false. If it is false, as shown by some counterexample, then substituting this value of θ into every line might indicate where the error arises. If, on the other hand, we cannot find a counterexample, then the conjecture and argument may well be true. In this case, given that we are dealing with trigonometric functions, we would do well to think about their graphs and try values of θ in different quadrants.
- If we sketch (or think about) the graphs of sin, cos and tan, we have the following:
- y
- x 0 pi pi 3pi 2pi 2 2
- If the conjecture is false, we need a value of θ where tan θ > 0 but sin θ + cos θ < 1 We see that tan θ > 0 for 0 < θ < pi2 but there sin θ+cos θ > 1 looks like it might be true. We also have tan θ > 0 when pi < θ < 3pi 2 and there sin θ and cos θ are both negative, so sin θ + cos θ > 1 cannot be true. So if we take θ = 5pi4 we may find the source of the error. On line (I), we get sin θ cos θ = (- sqrt12 )(- sqrt12 = 12 and tan θ cos2 θ = 1 · (- sqrt12 )2 = 12 so this line looks reasonable. On line (II), we get 1 + 2 · 21 = 1 + 1 > 1 which is correct. On line (III), we get 21 + 2 · 12 + 12 = 2 > 1 so this is correct. On line (IV), we get (- sqrt12 - sqrt12 )2 = 2 > 1 so this line is correct for this value of θ. sqrt sqrt On line (V), we have - sqrt12 - sqrt12 = - 2 and - 2 > 1 is false. So it appears that the first error is likely to occur here: indeed, we have taken the square root of x2 > 1 and obtained x > 1, which is not necessarily the case, as we could have x < -1 We should now go back and check that the earlier steps are actually valid, as there could have been an earlier error. But with some thinking, we can see that all of them are correct:
- (I) This is obtained by multiplying both sides of tan θ > 0 by cos2 θ > 0 (and we cannot have cos θ = 0), and then noting the equality from the definition of tan θ given.
- (II) This is obtained by doubling the previous inequality and then adding 1.
- (III) Here, the identity sin2 θ + cos2 θ = 1 has been used to rewrite the left hand side.
- (IV) This factorisation is correct.
- (V) As we saw, an error occurs here.
- Hence the answer is F.

## Q14
Answer: `E`

Work:
- We sketch the situation using the given information. This sketch shows a case when there is not a unique solution. The length of P Q is uniquely determined when there is a unique triangle satisfying the conditions.
- Q2
- p Q1
- p 30◦ P 2 R
- If p is such that the circle centred at R with radius p touches the line from P at angle 30◦ , there will be a unique solution. If p is smaller than this, then there will be no intersections, and hence no solutions. If p is larger than this there will be two solutions, which suggests that the answer is A or B. We can work out the value of p which makes the circle tangent to the line through P : RQP will be a right-angled triangle with the right angle at Q in this case, and so p = 2 sin 30◦ = 1 This means that p = 1 gives a unique solution, and the solution is either A or possibly E. What happens when p = 2? Then the circle centred on R passes through P , and so there is only one possible location for Q. And then we see that if p > 2, the point Q1 will no longer exist: it will be beyond P , on the extension of the line “below” P R. So for any p ⩾ 2, there is also only one possible triangle. Hence the answer is option E.

## Q15
Answer: `G`

Work:
- This question appears to be related to graph transformations, so we will start with this approach and see where it leads. The equation f(x) = 0 has 3 distinct real roots, so y = f(x) intersects the x-axis 3 times.
- I The graph of y = f(x) + 1 is a translation of y = f(x) in the y-direction by 1 unit, which may or may not intersect the x-axis 3 times.
- II The graph of y = f(x + 1) is a translation of y = f(x) in the negative x-direction by 1 unit, so it will still intersect the x-axis 3 times, and hence f(x + 1) = 0 has 3 distinct roots.
- III The graph of y = f(-x) is a reflection of y = f(x) in the y-axis, which still intersects the x-axis 3 times. Then y = f(-x) - 1 is a translation in the negative y-direction by 1 unit, which may or may not intersect the x-axis 3 times.
- It is still not clear whether or not I or III are necessarily true. We will have to identify where the turning points of the graph are to determine this. We have f(x) = x3 + 3qx2 + 2 so f 0 (x) = 3x2 + 6qx so f 0 (x) = 0 when x = 0 or x == -2q, so the stationary points are at (0, 2) and (-2q, 2 + 4q 3 ). As the graph crosses the x-axis 3 times, the stationary points must lie either side of the x-axis, so 2 + 4q 3 < 0. Therefore when the graph is translated up by 1 unit, we may have the new stationary point at (-2q, 2 + 4q 3 + 1) with 2 + 4q 3 + 1 > 0, but when it is translated down by 1 unit, they will be at (0, 1) and (-2q, 2 + 4q 3 - 1), and 2 + 4q 3 - 1 < 0. So there will still be 3 intersections. Therefore II and III are necessarily true, and the answer is G.

## Q16
Answer: `F`

Work:
- Finding the median of the first n terms depends on whether n is even or odd. If n is odd, then the median of the first n terms is the middle term, which is x(n+1)/2 , so it is certainly an integer, whatever the sequence. We can consider the three given statements in this case:
- I n + 2 is also odd, so the median of the first n + 2 terms is a term of the sequence, specifically x(n+3)/2 , so it is an integer.
- II 2n is even, so the median of the first 2n terms is midway between the nth and (n + 1)th terms. This may or may not be an integer. For example, if the sequence is 1, 2, 3, . . . and n = 3, then the median of the first 2n = 6 terms is midway between 3 and 4, so is 3.5. This is not an integer. (On the other hand, it might be: if the sequence were 2, 4, 6, . . . , with n = 3 still, then the median of the first 2n = 6 terms is midway between 6 and 8, which is 7; this is an integer.)
- III There are n terms listed here, so the median of them is the middle one, which is certainly an integer.
- Thus in the case that n is odd, I and III must be true, but II need not be. Next we consider the case of n being even. In this case, the median of the first n terms is midway between x 1 n and x 1 n+1 , and we are told that this is an integer. If we call the common 2 2 difference of this arithmetic progression d, then midway between these is x 1 n + 21 d, so 12 d is an integer. (Alternatively, note that both the middle two terms are even or both the middle two terms are odd, so either all the terms of the arithmetic progression are even or all of them are odd. This is equivalent to saying that the common difference is even.) We again consider the three statements:
- I Now n+2 is even, and the median is midway between two terms (namely x 1 n+1 and x 1 n+2 ), 2 2 so it is an integer since the common difference is even. (Alternatively, it is an integer because either all of the terms are even or all of the terms are odd.)
- II We do not need to consider this statement, as we know it is not always true from before. (Nevertheless, this statement is always true for this case, using the same reasoning as for I.)
- III This time, we have n terms, and the common difference between consecutive pairs of them is 2d. The median is midway between central two terms (as n is even), so is an integer as d is an integer. Alternatively, the median is midway between xn and xn+2 , so is xn+1 , which is an integer.
- Therefore all three statements are true in the case that n is even. Putting this together, statements I and III must be true, whatever the value of n, but statement II is not necessarily true. Hence the answer is F.

## Q17
Work:
- We work through the given statements in turn.
- A This is a statement about numbers of the form N 2 . If we write N as a product of prime factors, then N 2 will have the same prime factors, but each to double the power. For example, if N = 3 × 173 × 414 then N 2 = 32 × 176 × 418 . So each prime factor occurs to an even power in its prime factorisation, so it is a squaresum. Alternatively, we can ignore the theorem completely, and note that N 2 = N 2 + 02 , so N 2 is a squaresum. So this statement is true.
- B If N is a squaresum, then each of its awkward prime factors occurs to an even power in its prime factorisation, by the theorem. Likewise, each of the awkward prime factors of M occurs to an even power in its prime factorisation. The prime factorisation of N M is the product of the prime factorisations of M and N , so each awkward prime occurs to an even power in the prime factorisation of N M , and therefore N M is a squaresum. Thus this statement is also true.
- C If N M is a squaresum, then each of its awkward prime factors occurs to an even power in its prime factorisation. But it is not clear why that would mean that each of the awkward prime factors of M and N each occur to an even power in the factorisations of M and N . And we can find a counterexample to this statement: 23 is awkward, so if N = M = 23 then N M = 232 is a squaresum, but neither N nor M is. So this statement is false.
- D As N is not a squaresum, some awkward prime factor occurs to an odd power in its prime factorisation. If we multiply N by this awkward prime factor, then the result will have this awkward prime factor to an even power. But N might have more than one awkward prime factor occurring to an odd power, so we multiply by all such awkward prime factors. The result will be a number with every awkward prime factor occurring to an even power. Thus letting k be the product of all the awkward prime factors of N which occur to an odd power, kN is a squaresum. Hence this statement is true.
- The only false statement is C.

## Q18
Answer: `C`

Work:
- It is helpful to draw a sketch of y = f(x) to understand what is going on here. f(a) + f(b) Note first that is the mean of the f(a) and f(b), so if we draw a line segment from 2   a + b f(a) + f(b) (a, f(a)) to (b, f(b)) on the graph of y = f(x), then the point , is the midpoint 2 2 of this line segment.    a+b a+b Likewise, ,f is the point on the graph with this x-coordinate. 2 2 The inequality states that the line segment lies above the graph at this point, so the graph could look something like this:
- y
- f(a) + f(b)   a+b f
- x a a+b b
- We see the for the inequality to be true in this case, the curve needs to “bend up”, so that it is below the chord connecting (a, f(a)) with (b, f(b)). This means that the second derivative, f 00 (x) must be positive. So it would seem likely that the answer is C. Without too much difficulty we can see that the other options don’t work, just by looking at the above sketch. This shows that none of D, E or F is necessary (for the curve could bend back upwards for more negative values of x, as in a quadratic). If we translate the graph downwards, then it will still have this property, but A is no longer the case, so A is not necessary. And if we continue this graph to more negative values of x, it will have f 0 (x) < 0 if we go far enough, so B is not necessary either. Therefore by elimination, C must be necessary. We can also prove directly that C is necessary. To do so, we will prove the contrapositive: if f 00 (x) < 0 for some real x, then there are real numbers a and b with a < b for which   f(a) + f(b) a+b <f (∗) 2 2
- Now, f 00 (x) < 0 means that the curve is “bending downwards” at this point, which means that a sketch of the graph will look like a reflection of the above sketch in a horizontal line (at least near the point where f 00 (x) < 0). And then the curve will lie above the chord, so (∗) is true. Hence C is necessary.
- Commentary: An interesting question to wonder about is whether there are any examples of such polynomial functions. Clearly, constant polynomials (f(x) = c) satisfy the condition, as do linear polynomials (f(x) = ax + b) and quadratics with a positive coefficient of x2 (f(x) = ax2 + bx + c with a > 0) For higher degree polynomials, if f(x) = axn + · · · , then f 00 (x) = an(n - 1)xn-2 + · · · . If n is odd, then this polynomial takes all real values, including negative ones, so this cannot satisfy the condition. If n is even, then it might be the case that f 00 (x) ⩾ 0 for all x, which will be the case if f 00 (x) ⩾ 0 at all of its stationary points. For example, if we take f 00 (x) = 3x1 + 1, then the corresponding f(x) will have this condition. A function satisfying this condition is called a convex function.

## Q19
Work:
- There are different ways of approaching this question. Given that the question asks which one of the statements must be true, it is probably simplest to try to find values which “break” each of the inequalities. For each one, we can either multiply through by the denominators first, or leave the fractions as fractions.
- A We can write this as 2z-x+1 > 2x-y + 2z-y To make this false, we want the left side small and right side large. But x > y > z, so the left hand side is less than 2. If we then make x - y > 1, the right hand side will be at least 2, and so this statement is not necessarily true. For example, x = 10, y = 5, z = 3 will make the inequality false.
- B This becomes 2 > 3x-y + 3z-y . If we take x = 10 and y = 2, then the first term on the right side is 38 so this inequality is not always true.
- C Multiplying by 5z 5y gives 2 × 5x+y > 5x+z + 52z Now 5x+y > 5x+z and 5x+y > 52z so this must be true.
- D This is 2 < 7x-y + 7z-y If x and y are very close, then 7x-y is just greater than 1, and then if z is much smaller than y, 7z-y is close to 0, so the sum will be just greater than 1. So for example, x = 1000, y = 999.99, z = 1.1 will do to show that this statement is not always true.
- Therefore the correct option is C.

## Q20
Work:
- An algebraic approach
- We can manipulate the equation algebraically. We could square it immediately, but it is probably simpler to first move one of the square roots to the other side so that there is only one square sqrt sqrt root on each side, that is x + p = p - x We can now square this to obtain x + p = p2 - 2p x + x so 2p x = p2 - p If p 6= 0, we can divide by p to obtain 2 x = p - 1. Since the left side of this must be positive, there will be a solution as long as p ⩾ 1. We also need to check that when p ⩾ 1, the solution obtained does satisfy the original equation. We have x = 12 (p - 1) so x = 41 (p - 1)2 . Then the left side of the original equation becomes q q q q 1 2 1 2 1 2 1 2 1 1 4 (p - 1) + p + 4 (p - 1) = 4 (p + 1) + 4 (p - 1) = 2 (p + 1) + 2 (p - 1) = p
- and so this is a real solution. sqrt sqrt Finally, when p = 0 (which we excluded earlier), the equation becomes x + x = 0, which has the solution x = 0. Thus the correct option is B.
- A graphical approach sqrt sqrt sqrt We can sketch the graph y = x + p + x. We know that x is an increasing function, defined for x ⩾ 0, taking only non-negative values. It follows that y = x + p is also an increasing function, defined for x ⩾ -p, being a translation of y = x by p in the negative x-direction. Here is a sketch of the two graphs for some p > 0:
- y
- x
- Clearly, there cannot be a solution for p < 0, as the left hand side is never negative. For p ⩾ 0, the function on the left hand side is defined for all x ⩾ 0, and is increasing towards infinity. So the smallest value the function takes is when x = 0, which is p, and it takes on every value larger than this. So there will be a solution to the original equation whenever p ⩽ p, which is whenever p ⩽ p2 , that is p2 - p ⩾ 0 or p(p - 1) ⩾ 0. This holds for p ⩽ 0 and p ⩾ 1. Since we also require p ⩾ 0, there is a solution for p = 0 and for all p ⩾ 1. Hence the correct option is B.

## Answer Summary

`1C 2B 3F 4D 5A 7B 8D 12H 13F 14E 15G 16F 18C`
