# TMUA Practice Paper 2 Worked Notes

Sources:
- Paper PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7121_TMUA%20Practice%20Paper%202.pdf>
- Official worked solutions PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7123_TMUA%20Practice%20Paper%202%20Official%20Solutions.pdf>
- Answer key PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7120_TMUA%20Practice%20Paper%20Answer%20Key.pdf>

## Notes
- These notes are generated from the official worked solutions and cleaned into markdown.
- Each section keeps the official answer option and a cleaned version of the official reasoning.

## Q1
Answer: `A`

Work:
- We begin by expanding the brackets, either using the binomial theorem or by multiplying them out by hand, to get Z 2 2 Z 2 24 16 x + 2 dx = x4 - 8 + dx 1 x 1 x4 Z 2 = x4 - 8 + 16x-4 dx 2 16x-3  5 x = - 8x + 5 -3 1     32 16/8 1 16 = -8×2- - -85 3 5 3 31 14 = -8+ 5 3 93 - 120 + 70 = = and so the answer is A.

## Q2
Answer: `B`

Work:
- We begin by expanding the brackets and simplifying the powers of x:
- 2x3 + 10x f(x) = 3 x4 9 1 = 2x + 10x 4
- so 5 3 f 0 (x) = 2 × 94 x 4 + 10 × 14 x4 5 3 = 92 x 4 + 52 x4
- which is option B.

## Q3
Answer: `D`

Work:
- We use the identity sin2 x + cos2 x = 1 to write the equation in terms of sin x:
- 8 sin2 x + 4 cos2 x = 4 sin2 x + 4 = 7 so 4 sin2 x = 3, giving sin2 x = 43 so sin x = ± 23 . sqrt sqrt The solutions to sin x = 23 lie in the interval 0 < x < pi, while the solutions to sin x = - 23 lie in the interval pi < x < 2pi, and thus the largest anglesqrtin the range 0 < x < 2pi which satisfies the original equation is the largest solution to sin x = - 23 . This is 2pi - pi3 = 5pi 3 , which is option D.

## Q4
Answer: `C`

Work:
- We work through the possibilities systematically.
- Urn P’s statement is true, so the urns each contain one or four balls. As Urn Q has a false statement, there cannot be two or four balls in the urns, and so there is one ball in each urn. But then Urn S has a true statement, which is impossible.
- Urn Q’s statement is true, so the urns each contain two or four balls. As Urn P has a false statement, there cannot be one or four balls in each urn, so there are two balls in each urn. But then Urn S has a true statement, which is impossible.
- Urn R’s statement is true, so there are three or four balls in each urn. As Urn P’s statement is false, there cannot be four balls in the urn, so there are three balls in each urn. This means that Urn Q, Urn S and Urn T each have a false statement, and therefore this is possible.
- Urn S’s statement is true, so the urns each contain one or two balls. As Urn P’s statement is false, there cannot be one ball in each urn, so there are two balls in each urn. But then Urn Q has a true statement, which is impossible.
- Urn T’s statement is true, so the urns each contain one or two balls. But then Urn S’s statement is true, which is impossible.
- Therefore the only urn which has a true statement is Urn R, so option C is correct.

## Q5
Answer: `C`

Work:
- We can rewrite the statement (∗) in the form
- If a whole number n is 1 less or 5 less than a multiple of 6, then n is prime.
- A counterexample to this statement is a whole number n which makes this if statement false, that is, it is a whole number n that is 1 less or 5 less than a multiple of 6, but which is not prime. So we list these numbers and check whether they are prime: n Prime? 1 no 5 yes 7 yes 11 yes 13 yes 17 yes 19 yes 23 yes 25 no 29 yes 31 yes 35 no 37 yes 41 yes 43 yes 47 yes 49 no Thus there are 4 numbers which are counterexamples in this range, and so the answer is C.

## Q6
Answer: `C`

Work:
- We work out the first few functions in the sequence to find a pattern.
- f1 (x) = x10 f2 (x) = x(10x9 ) = 10x10 f3 (x) = x(100x9 ) = 100x10 f4 (x) = x(1000x9 ) = 103 x10 f5 (x) = x(104 x9 ) = 104 x10
- and so the pattern is clear: fn (x) = 10n-1 x10 . The sum expands to X fn (x) = x10 + 10x10 + 102 x10 + 103 x10 + · · · + 1019 x10 n=1 = (1 + 10 + 102 + · · · + 1019 )x10  20  10 - 1 = x10 10 - 1
- where on the final line we have summed the geometric series with a = 1, r = 10, n = 20 using the formula a(rn - 1) Sn = . r-1 The answer is therefore option C.

## Q7
Answer: `C`

Work:
- The proof certainly begins with (1):
- Let x = loga b and y = loga c.
- We are then given a choice of writing d in various ways (line (2), (3) or (4)). We are given
- logc d = (loga b)2
- so we can rewrite this using x as logc d = x2 . Therefore d = c(x ) , which is line (3).
- Our next choice is between lines (5) and (7) (these are the only options, as the correct answer must be C or D); these are equivalent, but expressed differently. How can we get from d = c(x )
- to d being a power of a? We must rewrite c in terms of y: since y = loga c, it follows that c = ay , so d = (ay )(x ) , which is line (5).
- Without doing any more work, the answer must therefore be option C, and the whole proof reads as follows:
- Suppose that logc d = (loga b)2 . (1) Let x = loga b and y = loga c. Then (3) d = c(x ) , so (5) d = (ay )(x ) , so 2 2
- (9) d = a(x y) , so (7) d = (ax )xy , and therefore (4) d = bxy , hence (*) as required.

## Q8
Answer: `B`

Work:
- A useful way to approach this question is to sketch the graph of these inequalities; we shade the invalid regions. (You might find it helpful to rewrite the inequalities as y > 6 - x and y < x + 4.)
- y
- 0 6 x
- The boundaries of the regions intersect when x + y = 6 and x - y = -4; adding these equations gives 2x = 2, so x = 1 and y = 5, that is, they intersect at (1, 5). Therefore for every point in the white region, condition 1, x > 1, is satisfied. However, there are clearly points for which condition 2, y > 5, is not satisfied, for example (7, 0). Finally, (x + y)(x - y) > -24 is not immediately clear. This is obtained by multiplying the two inequalities together, but is this permissible? We could try finding a counterexample to this condition. x + y > 6 means that x + y is always positive, so a counterexample must have x - y < 0 (that is, y > x) to give a product less than -24. We could take y = x + 3, giving x - y = -3, and then if we had x + y > 8, the product would be less than -24. (Recall that the first inequality is equivalent to x + y > 6, so we may do this.) So we have a counterexample: take x = 5, y = 8, giving x + y = 13, and (x + y)(x - y) = -39 < -24. Hence this third condition is not true for every point in the region. Therefore the answer is option B.

## Q9
Answer: `D`

Work:
- We work through the conditions in the order given. We recall three relevant conditions for these two triangles to be congruent:
- side-side-side (SSS): all three corresponding pairs of sides are equal in length
- side-angle-side (SAS): two corresponding pairs of sides are equal in length, and the corresponding included angles are equal
- angle-side-angle (ASA): two corresponding pairs of angles are equal, and the corresponding sides between these angles are equal in length
- (1) If we knew that either AC = XZ or the angle B equals the angle Y , then they would certainly be congruent by SSS or SAS. We know that the areas are equal, so we have 2 AB.BC sin B = 2 XY.Y Z sin Y , and so sin B = sin Y . This does not imply that B = Y 1 1
- though: we could have Y = 180◦ - B, for example:
- A X
- B=Y C=Z
- (2) We now have an angle at the end of the given side, so we can use the equal-area property to work out a second side: the angle ∠ABC is included between AB and BC, and likewise for XY Z. Therefore, as the areas are 12 AB.BC sin(∠ABC) and 12 XY.Y Z sin(∠XY Z), it follows that BC = Y Z. The triangles are therefore congruent by SAS.
- (3) We now have two pairs of corresponding equal angles, and so the third pair of corresponding angles is also equal and the triangles are similar. Since the areas are equal, they must be congruent.
- Hence conditions (2) and (3) each imply that the triangles are congruent, and the answer is option D.

## Q10
Answer: `E`

Work:
- A key point in this question is that x and y are permitted to be positive or negative. To show that a condition is not sufficient, we need to find values of x and y where the condition holds but x ⩾ y. To show that a condition is sufficient, we must prove it to be the case. We can argue algebraically or graphically; we start with an algebraic approach.
- A If y = -2 and x = 1, the condition holds but x > y.
- B We do not even need to look at negative cases here: if x and y are both positive, we can take fourth roots and deduce that y < x, for example y = 1 and x = 2.
- C If x = 2 and y = 1, then x-1 < y -1 but x > y.
- D Positive values of x and y do not work, but if we take x = 1 and y = -1, then y -1 < x-1 but x > y.
- E This looks quite plausible: if we raise this inequality to the power of 5 (which we are allowed to do, as f(x) = x5 is an increasing function), we get x3 < y 3 . We can now take cube roots (again, this is permissible as f(x) = x 3 = 3 x in an increasing function) to give x < y. So
- this condition is sufficient.
- F Arguing as in part E, y 5 < x 5 implies y < x, so this is not sufficient. Alternatively, we can 3 3
- just substitute in the values x = 1, y = -1.
- Thus the answer is option E. We can also see this by looking at the graphs of the functions f(x) = x4 , f(x) = x-1 and f(x) = x 5 : if these are strictly increasing functions, then x < y if and only if f(x) < f(y), while
- if they are strictly decreasing functions, then x < y if and only if f(x) > f(y). These are sketches of the graphs of these functions: y y y
- x x x
- f(x) = x4 f(x) = x-1 f(x) = x 5
- Neither of the first two functions is strictly increasing or strictly decreasing (for f(x) = x-1 , note that the function decreases when x < 0, but f(-1) < f(1), so it is not a decreasing function). The third function is strictly increasing, so the answer is option E.

## Q11
Answer: `D`

Work:
- We know that the polynomial intersects the x-axis at x = -p and x = p only. It may touch the x-axis at those points or it may cross it - we are not told whether x = p is a single root or double root, for example. We consider the three statements in turn.
- 1 It is entirely possible that y = f(x) has multiple stationary points between x = -p and x = p without crossing the x-axis, for example in this sketch:
- y
- x -p p
- Therefore this statement need not be true.
- 2 This is not necessarily true for (at least) two different reasons:
- If the graph of y = f(x) is entirely R p below the x-axis between x = p and x = -p, as in the above sketch, then the integral 0 f(x) dx will be negative, but the area is positive. • If the graph R p of y = f(x) is not symmetrical about x = 0, then there is no reason that the integal -p f(x) dx will be twice 0 f(x) dx. An example is this sketch, which is of the Rp
- graph of y = (x + 1)(x - 1)(x2 + x + 1); here p = 1, and the graph of y = x2 + x + 1 is always positive, but it is not symmetrical about x = 0: y
- x -p p
- 3 The graph of y = f(-x) is obtained by reflecting the graph of y = f(x) in the y-axis, so this graph intersects the x-axis at x = -p and x = p. The graph of y = -f(-x) is obtained from this by reflecting the graph in the x-axis, which does not change the points of intersection with the x-axis. Therefore this statement must be true. The graph obtained by combining these two transformations is the rotation of the original graph about the origin by 180◦ .
- The answer is therefore option D.

## Q12
Work:
- The formula for Sn in terms of a and d is Sn = 21 n(2a + (n - 1)d). Substituting n = 8 and n = 6 gives
- S8 = 4(2a + 7d) S6 = 3(2a + 5d)
- so the condition S8 > 3S6 becomes
- 4(2a + 7d) > 3 × 3(2a + 5d).
- Expanding the brackets gives 8a + 28d > 18a + 45d, which on rearranging gives -8a > 17d, or d < - 17 a. If a is positive, then - 17 a is negative, so d must be negative. If a is negative, then - 17 a is positive, so d could be positive or negative. So a can be positive or negative, as can d. We therefore cannot deduce the sign of either a or d, and so the correct option is F.

## Q13
Work:
- Working through the lines of the argument one at a time:
- 1. This looks like it might be the contrapositive of the statement we are aiming to prove; let us check this. The original statement is:
- If a divides bc, then a divides b or a divides c
- so the contrapositive is
- If not (a divides b or a divides c), then not (a divides bc)
- which simplifies to
- If not (a divides b) and not (a divides c), then a does not divide bc
- or
- If a does not divide b and a does not divide c, then a does not divide bc
- So line 1 is correct.
- 2. “Suppose …” starts the proof: we suppose the antecedent of the “if” statement. The part about remainders is correct; this is what it means for a to not divide b.
- 3. This is an expression of division with remainder: b = ax + r could be read as “b divided by a is x remainder r.” So this line is correct.
- 4. A small amount of algebra shows that this line is correct.
- 5. This is not clearly correct: what happens if rs > a, for example? We will return to this line in a moment.
- 6. This is clearly a correct assertion.
- 7. If line 5 were correct, then this would be correct.
- Since we are told that the statement is false, the error must lie in line 5. We have already identified one possible problem, but we can do even better by finding a case where the remainder when dividing bc by a is 0, showing that a does divide bc. Let us take, for example, a = 6. Then if r = 2 and s = 3, we have rs = 6 = a, so that the remainder is 0. An explicit example would then be a = 6, b = 2 and c = 3. The correct answer is therefore E.

## Q14
Work:
- The number of solutions to f(x) = 1 is the number of times the graph of y = f(x) intersects with the line y = 1, and similarly for the other three cases. So we need to think about possible shapes of y = f(x). We assume that a 6= 0 for now, so that we are dealing with a quartic; this will be enough to answer the question. (Each of the given options has one of p, q, r or s equal to 4, which is impossible if the curve is a cubic, quadratic or linear.) A quartic with a > 0 either has a W-shape, or it is a bit like a quadratic in that it has exactly one local minimum. If a < 0, the possibilities are the reflections of these. We can then try to construct curves with the given conditions.
- A p = 1 and q = 2 indicates that a > 0 and that y = 1 is tangent to the curve. So something like this would work, where we have drawn dashed lines to show y = 1, y = 2, y = 3 and y = 4. (We could have left out the y-axis for clarity.)
- y
- x
- (An accurately-plotted quartic would not look quite like this, as you can see if you use graphdrawing software. Nevertheless, the general shape could be correct, with the stationary points in roughly the locations shown.) We could also draw this schematically as:
- y
- x
- We will use this schematic representation for the rest of the cases.
- B Again, we require a minimum at y = 1. But as there are 4 crossings at y = 4, the curve must do something like this:
- y
- x
- where the last part is not yet clear. However, to get r = 2, the last minimum must lie above y = 3, but then we cannot have q = 3. Hence this is not possible. We look at the other three options for the sake of completeness.
- C Again, there is a minimum at y = 1, and r = 3 gives a stationary point at y = 3. This sketch does the job:
- y
- x
- D Since s = 1, we must have a < 0 and y = 4 is a maximum. Likewise, y = 3 must also be a stationary point. The following sketch achieves this:
- y
- x
- E This is similar to the previous option: a < 0 and there is a maximum at y = 4. As q = 3, there is a stationary point at y = 2, which gives the following sketch:
- y
- x
- The correct option is B.

## Q15
Work:
- We start by finding the roots of f(x) = 0. They are given by the quadratic formula, and are p 2p ± (-2p)2 - 4q p r1 , r2 = = p ± p2 - q.
- The roots are real if and only if the discriminant is non-negative, so if and only if p2 - q ⩾ 0. The difference between the roots is r2 - r1 = 2 p2 - q, so the condition (∗) is true if and only p
- if
- p2 - q ⩾ 0 and 2 < 2 p p2 - q < 4
- so it is true if and only if
- p2 - q ⩾ 0 and 1 < p p2 - q < 2
- which is true if and only if
- p2 - q ⩾ 0 and 1 < p2 - q < 4
- The first condition is implied by the second condition, so both conditions are true if and only if 1 < p2 -q < 4, which we can rearrange to q+1 < p2 < q+4. Subtracting 1 gives q < p2 -1 < q+3, which is condition D. We can also show that the other four statements are not true if and only if (∗) is true, as follows. Statement A fails, because the left inequality q < p2 is not the same as q < p2 - 1. Statement A is true if (∗) is true, but (∗) could be true without statement A being true; in other words “statement A is true only if (∗) is true” is false. Statement B fails, because this requires p > 0, whereas we could have p < 0; thus, statement B is true only if (∗) is true, but “statement B is true if (∗) is true” is false. Statement C fails, because this allows for the difference between the roots to be exactly 2 or 4. So statement C is true if (∗) is true, but “statement C is true only if (∗) is true” is false. Finally, statement E fails, because the second inequality is equivalent to p2 - 1 < q + 4, so similarly to statement A, statement E is true if (∗) is true, but “statement E is true only if (∗) is true” is false. So the correct option is D.

## Q16
Answer: `C`

Work:
- There are several pairs of similar triangles in this diagram. We note that SU X and SP Q are similar, RXT and RP Q are similar, and XSR and XQP are similar. The last pair is the most helpful to start with, as we know the lengths of two corresponding sides: SR = 3 and QP = 12, so the scale factor is 123 = 4. Thus the height of XQP (from X) is 4 times the height of XSR (again from X). It follows that U P = 4SU , and so SP = 5SU . Since SU X is similar to SP Q, and SP = 5SU , we must have P Q = 5U X, so U X = 15 P Q = 12 5 . Likewise, XT = 5 , so U T = 5 = 4.8 and the 12 24
- correct answer is C. We could alternatively have used the similarity of triangles P U X and P SR, and of triangles QXT and QSR; we would reach the same result.

## Q17
Work:
- The graph of y = 3 sin x + 2 is the standard sine graph stretched vertically by a factor of 3 and then translated in the y-direction by 2. It thus oscillates between 2 - 3 = -1 and 2 + 3 = 5, and its y-axis intercept is 2. y = x + c has gradient 1 and y-intercept c. We sketch the graph of y = 3 sin x + 2 to help us:
- y
- x -2pi -pi pi 2pi
- -1
- We now consider the statements in turn:
- 1 To have exactly one solution with 0 ⩽ x ⩽ pi and at least one solution with -pi < x < 0, we could take c to be just less than 2. So this statement is true.
- 2 We want to choose c to be negative for this case; if c is such that y = x + c intersects the sine curve at x = pi, there will be exactly one solution with 0 ⩽ x ⩽ pi. This value of c must satisfy 2 = pi + c, so c = 2 - pi < -1, so there are no solutions with x < 0. So this statement is true.
- 3 The same value of c as in statement 2 will work here: c = 2 - pi. At x = 2pi, x + c = 2 + pi > 5, so there cannot be any solutions with x ⩾ 2pi. As the sine graph is below 2 for pi < x < 2pi, there are no solutions there either. So this statement is true.
- The correct option is therefore H.

## Q18
Work:
- For a function to be a counterexample to this ‘if’ statement, the first condition (the antecedent) must be true but the second condition (the consequent) must be false. So we first check whether these functions satisfy the condition f(x) ⩽ 1 for all -1 ⩽ x ⩽ 1: 2
- A This function goes from - 21 to 32 as x goes from -1 to 1. So when x = 1, f(x) = ( 32 )2 > 1. 2
- So this function does not satisfy the antecedent.
- B Similarly to A, when x = - 12 , f(x) = - 32 , so f(x) > 1 and this function also does not 2
- satisfy the antecedent.
- C When x = 1, f(x) = 2 so f(x) > 1 and this function does not satisfy the antecedent. 2
- D This function looks as though it might satisfy the antecedent, as it does not obviously fail to do so: f(-1) = f(0) = f(1) = 0, so the cubic graph has two stationary points in the interval -1 ⩽ x ⩽ 1. We can locate these by differentiating:
- f 0 (x) = 1 - 3x2
- so f 0 (x) = 0 when x = ± sqrt13 . As
- f sqrt13 bigr) = sqrt13 - 3sqrt 1 2 < 1 and f - sqrt13 = - sqrt13 + 3sqrt 1 2  = 3sqrt 3 3 = - 3sqrt 3 > -1,
- we see that the function lies between - 3sqrt and when so ⩽ 1 in this 2 2 2 3 3 -1 ⩽ x ⩽ 1, f(x) interval, and the antecedent is satisfied.
- E As in C, when x = 1, f(x) = 2 so f(x) > 1 and this function does not satisfy the antecedent. 2
- F As with D, f(-1) = f(0) = f(1) = 0, so we look for stationary points of the function. We have f 0 (x) = 2x - 4x3 = 2x(1 - 2x2 ) so f 0 (x) = 0 when x = 0 or x = ± sqrt12 . We have f(0) = 0 and f ± sqrt12 = 12 - 41 = 14 , so the 
- function lies between 0 and 14 when -1 ⩽ x ⩽ 1, so the antecedent is satisfied.
- We therefore only need to consider the consequent condition for D and F. For the function in D, the integral on the right, -1 f(x) dx, is zero, since both x and x3 are odd R1
- functions: the area between 0 and 1 and the area between -1 and 0 are equal, but the first is above the x-axis and the second below it, so they cancel each otherR 1 out.2We could also see this by calculating the integral explicitly. The integral on the left, -1 f(x) dx, is the integral of a square, which is never negative, so the integral must be greater than 0. (We could likewise find this exactly by explicit integration.) Thus -1 f(x) dx > -1 f(x) dx and the consequent R1 2 R1
- is false. Hence D provides a counterexample. For the sake of completeness, we will show that F is not a counterexample. Note that 0 ⩽ f(x) < 1 for all -1 ⩽ x ⩽ 1. This means that f(x) ⩽ f(x) for all -1 ⩽ x ⩽ 1, and so
- -1 f(x) dx ⩽ -1 f(x) dx. Thus F is not a counterexample. (We could, of course, find these R1 2 R1
- integrals by explicitly integrating.) The correct answer is therefore D.

## Q19
Answer: `F`

Work:
- We first note that the object fits within a 3 × 3 cube. We begin with the plan view of the object: all of the cubes must be within three layers fitting within this L-shape. Let us show the three layers:
- ? ? ?
- ? ? ?
- ? ? ? ? ? ? ? ? ? bottom layer middle layer top layer
- We have used ‘?’ to indicate that we do not yet know where there are cubes. We do, however, know that there must be a cube in at least one of the three layers for each of the five positions. Next, let us look at the front elevation. This tells us that in the left hand column, we can see two cubes. Since there is only one possible location for the cubes in this column, the first two layers must have a cube and the third not. Likewise, for the middle column, there is only a cube in the bottom layer. In the right hand column, there must be at least one cube in each layer, but it is not yet clear where these would be, as there are three possible positions in each layer. We now know the following:
- ? ? ?
- ? ? ?
- Y Y ? Y x ? x x ? bottom layer middle layer top layer
- Next, let us consider the side elevation. The left hand column, which corresponds to the bottom row of the plan view layers, has height 2, which means that the bottom right corner of the top layer cannot have a cube. The middle column, which corresponds to the middle row of the plan view layers, has height three, so all three of these cubes must be present (as there is only one possible position in the middle row). Finally, the right column, corresponding to the top row of the plan view layers, has height one, so only the bottom layer has a cube in this position. We thus reach this position:
- Y x x
- Y Y Y
- Y Y ? Y x ? x x x
- bottom layer middle layer top layer
- One of the ‘?’ cubes must be present, to give the required plan view, and the other one may or may not be - it makes no difference to any of the views. So there are either 8 or 9 cubes, and the answer is option F. (Note that we would need the corner of the bottom layer to be ‘Y’ if it is a single object.)

## Q20
Answer: `E`

Work:
- We can find the interior angle of a regular polygon with n sides as follows. The exterior angle n , so the interior angle is 180 - n . Therefore the given condition can be written as is 360 ◦ 360◦ ◦
- 360◦ 360◦   ◦ 3 ◦ 180 - = 180 - . n 4 m We start by dividing by 180◦ for simplicity, giving   2 3 2 1- = 1- . n 4 m Now multiplying both sides by 4 and expanding the brackets gives 8 6 4- =3- , n m which rearranges to 8 6 - = 1. (∗) n m We will look at two methods of solving this equation, starting with a case-based approach. We know that n and m must each be at least 3. If n ⩾ 8, then n8 ⩽ 1, and so this cannot give a solution to (∗). So we need only consider n = 3, 4, 5, 6 and 7. For each of these, we can solve the equation to find m; if m is an integer greater than 2, we have a solution.
- n m 3 18 4 6 5 10 6 18 7 42
- There are four pairs of n and m, and the answer is E. A second approach to solving (∗) is to multiply both sides by mn to eliminate the fractions; this gives 8m - 6n = mn. We can rearrange this to give mn + 6n - 8m = 0, and we can factorise the left hand side by adding or subtracting a constant to get
- (m + 6)(n - 8) = -48.
- So we need to find two integers which multiply to -48. Since m and n are both positive, we must have n - 8 < 0 and m + 6 ⩾ 9 (as m ⩾ 3), so the possibilities are:
- m+6 n-8 m n 12 -4 6 4 16 -3 10 5 24 -2 18 6 48 -1 42 7
- as before.
- We are Cambridge Assessment Admissions Testing, part of the University of Cambridge. Our research-based tests provide a fair measure of skills and aptitude to help you make informed decisions. As a trusted partner, we work closely with universities, governments and employers to enhance their selection processes.
- Cambridge Assessment Admissions Testing The Triangle Building Shaftesbury Road Cambridge CB2 8EA United Kingdom
- Admissions tests support: admissionstesting.org/help

## Answer Summary

`1A 2B 3D 4C 5C 6C 7C 8B 9D 10E 11D 16C 19F 20E`
