# TMUA 2017 Paper 1 Worked Notes

Sources:
- Paper PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7114_TMUA%202017%20Paper%201.pdf>
- Official worked solutions PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7115_TMUA%202017%20Paper%201%20Official%20Solutions.pdf>
- Answer key PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7116_TMUA%202017%20Answer%20Key.pdf>

## Notes
- These notes are generated from the official worked solutions and cleaned into markdown.
- Each section keeps the official answer option and a cleaned version of the official reasoning.

## Q1
Answer: `C`

Work:
- We are given the derivative of y, and we want to find y itself, so we need to integrate. We start by expanding the fraction: dy 2 - 3x = 3x2 - dx x3 = 3x - 2x-3 + 3x-2
- so we can now integrate term-by-term to get
- y = x3 + x-2 - 3x-1 + c
- Now as y = 5 when x = 1, we can substitute to give
- 5 = 13 + 1-2 - 3 × 1-1 + c = -1 + c
- so c = 6 and the answer is C.
- Commentary: It turns out that there is a subtlety in this question which we usually ignore at school level. The question assumes that there is a ‘simple’ formula for y in terms of x. Since the function is not defined at x = 0, it is possible that we have different constants when x > 0 and when x < 0, so we could have, for example, ( x3 + x-2 - 3x-1 + 6 when x > 0 y= x3 + x-2 - 3x-1 + 8 when x < 0
- This may seem quite strange, but it would be a valid solution to the differential equation given in the question.

## Q2
Answer: `C`

Work:
- We expand the brackets, writing everything as powers of x: 2 1 2 f(x) = - x 2x2
- 4 2 1 1 = -2 + x2 x 2x2 4x4
- = 4x-2 - 2x-3 + x-4 (Take care with the last simplification: writing 4x14 = 4x-4 is a common error!) Then differentiating gives f 0 (x) = -8x-3 + 6x-4 - x-5 and differentiating a second time then gives
- f 00 (x) = 24x-4 - 24x-5 + 5x-6
- We can now subsitute x = 1 to give
- f 00 (1) = 24 - 24 + 5 = 5
- so the correct answer is C.

## Q3
Answer: `A`

Work:
- It is always worth drawing a sketch for questions like this, to ensure that we know what area is being referred to. The line l has a negative gradient, and passes through the point (0, 6); it also intersects the x-axis at (3, 0). So the sketch looks something like this:
- y
- l0
- x -6 0 3 l
- We see therefore that the required area is a triangle with base length along the x-axis of 3-(-6) = 9. Thus to find the area we only need to find the y-coordinate of the point of intersection of the two lines. The equation of the second line, l0 , can be given by y - y1 = m(x - x1 ): its gradient is the gradient perpendicular to -2, which is 21 , and it passes through (-6, 0), so it has equation
- l0 : y - 0 = 12 (x - (-6))
- which simplifies to y = 12 x + 3. We can find the coordinates of intersection by solving the equations of l and l0 simultaneously. Substituting for y, we get
- 6 - 2x = 12 x + 3
- so 52 x = 3, or x = 65 . This looks plausible from the sketch. We then get y = 12 x + 3 = 18 5 (and we can check that the equation of l gives the same y-value). Thus the area of the triangle is 1 18 81 1 2 × 9 × 5 = 5 = 16 5
- and the correct answer is A.

## Q4
Answer: `B`

Work:
- We are dividing a polynomial by a linear expression and asking for the remainder, so it would make sense to use the remainder theorem: if the polynomial f(x) is divided by x - a, then the remainder is f(a). In this case, we start with (3x2 + 8x - 3) and multiply it by (px - 1). This gives our polynomial f(x) = (3x2 + 8x - 3)(px - 1). We then divide f(x) by (x + 1) to get a remainder of f(-1) = 24 (using the remainder theorem). Substituting x = -1 into f(x) gives
- f(-1) = (3 - 8 - 3)(-p - 1) = 8(p + 1)
- Thus 8(p + 1) = 24, giving p = 2, and the correct answer is B.
- Commentary: We might have been tempted to multiply out the brackets in f(x). But this does not change the value of f(-1), and the remainder theorem does not say anything about the coefficients of x, x2 and so on, so there is no benefit to be gained from expanding f(x). It would only take more effort and increase the chances of making a mistake.

## Q5
Answer: `C`

Work:
- Commentary: The start of this seems like a fairly standard question: find the values of x which satisfy a pair of inequalities. The options offered, though, seem far from standard, so we will have to think carefully once we have found the set S.
- We start by solving the two inequalities separately. The quadratic factorises as x2 - 8x + 12 = (x - 2)(x - 6), so we are solving (x - 2)(x - 6) < 0 We can sketch the graph of y = (x - 2)(x - 6):
- 2 6
- so we see that the first inequality is satisfied when 2 < x < 6 The second inequality is a linear inequality which immediately simplifies to 2x > 8 or x > 4 We can combine these two inequalities using a number line:
- 2 4 6
- So the set S is given by 4 < x < 6 Our problem now is that none of the given options says 4 < x < 6. Most of them are in the form of quadratic inequalities. So we assume that one of the quadratic inequalities probably gives 4 < x < 6 when we ‘solve’ it. That, though, seems like a lot of work. We would do better to work in reverse and try to derive the quadratic inequality from 4 < x < 6. We could think about our earlier sketch, which helped us solve (x - 2)(x - 6) < 0 and gave 2 < x < 6. If we replace the 2 by a 4, we see that the inequality (x - 4)(x - 6) < 0 will give 4 < x < 6. We can expand this to get x2 - 10x + 24 < 0, and so the correct answer is C.

## Q6
Answer: `B`

Work:
- This calls for a sketch. The circle x2 + y 2 = 144 is centred on the origin and has radius 12:
- y
- k
- x 0 12 20
- It’s not exact, and it’s not drawn to scale, but it’s good enough to work with. The blue radius is perpendicular to the tangent line. We are trying to find the value of k.
- Approach 1 We could work out the equation of the tangent line. It has gradient m (which we don’t know) and passes through (20, 0), so it has equation y = m(x - 20). Since it is tangent to the circle, solving the two equations simultaneously must give one repeated root. We have x2 + y 2 = 144 into which we can substitute y = m(x - 20) giving
- x2 + m2 (x - 20)2 = 144 ⇐⇒ x2 + m2 (x2 - 40x + 400) = 144 ⇐⇒ (m2 + 1)x2 - 40m2 x + 400m2 - 144 = 0
- We want this to have exactly one root for x, so we need the discriminant to equal zero, giving
- (-40m2 )2 - 4(m2 + 1)(400m2 - 144) = 0.
- We can take out a factor of 42 :
- (10m2 )2 - (m2 + 1)(100m2 - 36) = 0
- and then expand the brackets to give
- 100m4 - 100m4 + 36m2 - 100m2 + 36 = 0
- so 64m2 = 36, or 8m = ±6. Since m < 0 (as the line intersects the positive y-axis), we have m = - 86 = - 34 . Thus the tangent line has equation
- y = - 43 (x - 20)
- Substituting in (x, y) = (0, k) gives k = 15, and hence the answer is B.
- Approach 2 We might notice from the sketch that we have some similar triangles, since the radius meets the tangent at right angles. If we label all of the vertices and equal angles, we will be able to describe things more precisely:
- y P k
- Q
- R x O 12 20
- So the triangles 4OQR, 4P QO and 4P OR are all similar. We also know the lengths OR = 20 and OQ = 12 (as it is a radius). By Pythagoras’s Theorem, applied to 4OQR, we can calculate QR = 16 (and we might note that 4OQR is a 3-4-5 triangle). We can then use the similarity of triangles 4P QO and 4OQR to find k: PO OR k 20 = =⇒ = QO QR 12 16 giving k = 15, as before.
- Commentary: You might prefer one or other of these approaches. The second is shorter, but requires some confidence with geometry and recognising similar triangles.

## Q7
Answer: `B`

Work:
- Let the common difference of the arithmetic progression be d and the common ratio of the geometric progression be r. Then we can write the first three terms of each as
- p, q = p + d, p2 = p + 2d and p, p2 = pr, q = pr2 .
- The second term of the geometric progression shows that r = p (as p is non-zero), so the third term gives q = p3 Looking again at the arithmetic progression, using q = p3 now shows that the second and third terms are
- p3 = p + d p2 = p + 2d
- We can eliminate d from these by subtracting twice the first equation from the second, giving p2 - 2p3 = -p. This rearranges to 2p3 - p2 - p = 0 This factorises as p(2p2 - p - 1) = 0, and then to p(2p + 1)(p - 1) = 0. This has the three solutions p = 0, p = - 12 and p = 1. We were told that p < 0, so we must have p = - 12 . Thus d = p3 - p = - 18 - (- 21 ) = 38 and the sum of the first 10 terms of the arithmetic progression is given, using the formula Sn = 12 n(2a + (n - 1)d), by       1 1 3 27 95 S10 = × 10 2 × - +9× = 5 -1 + = 2 2 8 8 8
- and the correct answer is B.

## Q8
Answer: `A`

Work:
- Multiplying out the brackets does not look like a particularly useful approach (what would we do with the terms cos x and sin x cos x in the same inequality?), so we will leave the expression in its factored form.
- If we temporarily write a = 1 - 2 sin x and b = cos x we will be able to see the structure of the problem a little more clearly. We want ab ⩾ 0, and this will happen when either a ⩾ 0 and b ⩾ 0, or when a ⩽ 0 and b ⩽ 0. So we need to solve each of these simpler inequalities.
- We have 1 - 2 sin x = 0 when sin x = 21 , so when x = pi6 or x = 5pi 6 . We can either sketch the graph of y = 1 - 2 sin x or try values to determine whether 1 - 2 sin x is positive or negative in each range. Sketching the graph seems possibly hard, as there are multiple transformations, and it would be easy to make a mistake. So on this occasion, we’ll plug in values: x = 0 and x = pi both give 1 - 2 sin x = 1; while x = pi2 gives 1 - 2 sin x = -1. Therefore
- 1 - 2 sin x ⩾ 0 when 0 ⩽ x ⩽ pi6 and when 5pi 6 ⩽x⩽pi 1 - 2 sin x ⩽ 0 when pi6 ⩽ x ⩽ 5pi
- We can do similarly for cos x; this time we can think about the graph in our head, and we have
- cos x ⩾ 0 when 0 ⩽ x ⩽ pi2 cos x ⩽ 0 when pi2 ⩽ x ⩽ pi
- We can now put everything together. Both expressions are greater than or equal to 0 when 0 ⩽ x ⩽ pi6 , and they are both less than or equal to 0 when pi2 ⩽ x ⩽ 5pi 6 . Hence the answer is A.

## Q9
Answer: `F`

Work:
- We clearly need to work out the radius of the circle to get anywhere on this problem. We can do this by completing the square. The equation of the circle, x2 + y 2 - 18x - 22y + 178 = 0, becomes (x - 9)2 - 92 + (y - 11)2 - 112 + 178 = 0 With a little bit of arithmetic, we can rearrange this to give
- (x - 9)2 + (y - 11)2 = 24 so the circle has a radius of r = 24 We now need to work out the area of the inscribed regular hexagon. We sketch the hexagon and its diameters:
- It is clear from the sketch (and even from a not-very-precise sketch) that the hexagon is composed of six triangles, each of which is equilateral and has side length equal to the circle’s radius r. We can work out the area of one of the triangles either using Pythagoras’s Theorem or using the formula 12 ab sin C for the area of a triangle. The trigonometric formula 12 ab sin C gives 12 r2 sin 60◦ = 43 r2 . Substituting r2 = 24 then gives sqrt sqrt each triangle an area of 6 3, and so the whole hexagon has an area of 36 3, which is option F. Alternatively we can proceed using Pythagoras’s Theorem. If the height of the triangle is h, then we have:
- r h
- 2r
- sqrt sqrt 3 3 2 Therefore h2 = r2 - ( 12 r)2 giving h = 2 r and the triangle has area 1 2 rh = 4 r as before.

## Q10
Answer: `E`

Work:
- The gradient of the tangent at x is f 0 (x) = -6p2 + 6px - 3x2 . Note that p is a constant, and so p3 differentiates to 0. The gradient of the tangent where x = -1 is therefore -6p2 - 6p - 3, and so the gradient of the normal is the negative reciprocal of this, namely -1 1 M= = -6p2 - 6p - 3 3(2p2 + 2p + 1)
- The greatest possible value of this occurs when the denominator of this fraction is as small as possible and positive. We can complete the square to find this:
- 2p2 + 2p + 1 = 2(p + 12 )2 + 12
- so the minimum of this is 21 (occurring when p = - 21 ). d We could also have found this using calculus: dp (2p2 + 2p + 1) = 4p + 2 which is zero when 1 1 p = - 2 , giving a minimum value of 2 . 1 2 Therefore the greatest possible value of M is 1 = 3 which is option E. 3× 2
- Commentary: Note that, in this case, the denominator of the fraction expression for M is always positive. If it was instead something like p2 -1, then there would not be a greatest possible value of M , as p2 - 1 could get as close to zero as we like, so M could be as large as we like.

## Q11
Answer: `A`

Work:
- We have x1 = 7, x2 = 3, x3 = 1. It is not at all clear what the pattern here is, so we calculate the next few terms: 23 × 1 - 53 -30 x4 = = = -5 5×1+1 6 23 × (-5) - 53 -168 x5 = = =7 5 × (-5) + 1 -24
- so x6 = 3, x7 = 1, x8 = -5 and so on. Thus the terms repeat in a cycle with length 4, and as 100 = 25 × 4, we see that x100 = -5, which is option A.

## Q12
Answer: `B`

Work:
- R4 R We have 2 f(x) dx = A, and the question asks about f(x + 2) dx between various limits. The graph of y = f(x + 2) is the graph of y = f(x) translated left by 2 units, so we can draw a sketch to see what effect this has on the area between x = 2 and x = 4:
- y y
- x x 0 2 4 0 2 4
- R4 R2 This means that 2 f(x) dx = 0 f(x + 2) dx = A (If you have learnt about integration by substitution, R4 youR can also show this as follows: writing x = u + 2 gives dx = du, and u = x - 2, so 2 f(x) dx = 0 f(u + 2) du) Therefore the answer is either A or B. We have Z 2 Z 2 Z 2 [f(x + 2) + 1] dx = f(x + 2) dx + 1 dx 0 0 0 R2 The first integral equals A, as we have shown, and 0 1 dx = 2, so the whole integral equals A + 2 and the correct answer is B.

## Q13
Answer: `C`

Work:
- The term in x4 is 4 4 4 4 4  4 a(bx) = 5ab x , so the coefficient of x is 5ab 5 3 The term in x2 is 2 3 2 2 2 3 2  2 a (bx) = 10a b x , so the coefficient of x is 10a b It follows, since the coefficient of x4 is 8 times that of x2 , that
- 5ab4 = 80a3 b2
- As a and b are non-zero, we can divide by 5ab2 to get b2 = 16a2 . Since both a and b are positive, we can take square roots to get b = 4a. (If we didn’t know about their signs, we could only say that b = ±4a.) So the smallest possible value of a + b occurs when a = 1, b = 4, giving a + b = 5, which is option C.

## Q14
Answer: `F`

Work:
- The equations involve 2x and 22x = (2x )2 , so we write a = 2x ; likewise we write b = 2y , and so our equations become:
- a + 3b = 3 a - 9b2 = 6
- The first equation gives a = 3 - 3b, which we can substitute into the second equation to obtain
- (3 - 3b)2 - 9b2 = 6
- which expands to 9 - 18b = 6, and hence b = 16 and a = 52 Another way to solve these simultaneous equations is to note that the second one can be written as (a + 3b)(a - 3b) = 6, using the identity for the difference of two squares. Since a + 3b = 3, this gives a - 3b = 2, from which we can again deduce a and b. We can now find x and y:
- x = log2 a = log2 25 = p y = log2 b = log2 16 = q
- and hence   5 1 5 1 p - q = log2 - log2 = log2 ÷ = log2 15 2 6 2 6
- Thus the correct answer is F.

## Q15
Answer: `B`

Work:
- We can either proceed by sketching the graph or by using a general theorem about the trapezium rule. We start with sketching. The simplest case of the trapezium rule is where we only have one trapezium, so that is what we will draw.
- y
- y = f(x)
- x 0 1
- We see here that the trapezium rule underestimates the area of y = f(x) For the case y = f(x + 1) the graph of y = f(x) is translated one unit to the left:
- y
- y = f(x + 1)
- x 0 1
- Again, the trapezium rule gives an underestimate. For the third case, we need to reflect this graph in the line y = 6, which gives the following graph:
- y
- x 0 1
- We see that this time, the trapezium rule gives an overestimate. So the correct answer is B.
- An alternative approach is given by noting that the trapezium rule gives an overestimate of the area under the graph of y = f(x) if f 00 (x) > 0 throughout the range and an underestimate if f 00 (x) < 0 throughout. In our case, f 00 (x) = -4, so the trapezium rule gives an underestimate for (1). For case (2), f 00 (x + 1) = -4 again, so we still have an underestimate. For the third case, the equation of the graph is y = 12 - f(x + 1), so the second derivative is -f 00 (x + 1) = 4, and therefore we have an overestimate.

## Q16
Answer: `E`

Work:
- In this question, we consider a function to be increasing when f 0 (x) ≥ 0, and decreasing when f(x) ≤ 0.
- Commentary: The classification of increasing and decreasing we use in the options for this question avoids a subtle issue: what we consider a function to be doing (i.e., increasing, decreasing, or neither) at points where f 0 (x) = 0. For this question, though, we don’t need to concern ourselves with this as the options all use ⩾ or ⩽. However, we will set out our answer using ‘⩾’ or ‘⩽’.
- We therefore calculate f 0 (x) and g0 (x) and find where each is positive and negative. f 0 (x) = 6x + 12 = 6(x + 2), so f 0 (x) > 0 when x > -2 and f 0 (x) < 0 when x < -2. g0 (x) = 3x2 + 12x + 9 = 3(x2 + 4x + 3). We can find where this is positive and negative by sketching the graph: x2 + 4x + 3 = (x + 1)(x + 3), giving the sketch of g0 (x):
- -3 -1
- so g0 (x) > 0 when x < -3 or x > -1, and g0 (x) < 0 when -3 < x < -1. We now want one of f 0 (x) and g0 (x) to be positive and the other negative. We have f 0 (x) > 0 and g0 (x) < 0 when x > -2 and -3 < x < -1, so when -2 < x < -1. Similarly, f 0 (x) < 0 and g0 (x) > 0 when x < -2 and either x < -3 or x > -1; together these give x < -3. So the complete set of solutions (if we decide to include the points where f 0 (x) = 0) is x ≤ -3 or -2 ≤ x ≤ -1, and so the answer is option E.

## Q17
Answer: `D`

Work:
- It seems that we need to calculate F(n) before we can find G(n). We could do this either using integration or geometry. We start with an integration method: 1 n Z F(n) = (n - x) dx n 0 n = n1 nx - 12 x2 0 
- = n1 (n2 - 21 n2 ) = 12 n
- We could reach the same conclusion by sketching a graph of the function:
- y
- n
- x 0 n
- The area of this triangle is 12 n2 , so F(n) = n1 × 12 n2 = 12 n We now have: n X G(n) = F(r) r=1 Xn = 2r r=1 Xn = 12 r r=1
- where for the last line we have used ( 21 F(1) + 21 F(2) + · · · ) = 12 (F(1) + F(2) + · · · ) Now nr=1 r = 1 + 2 + · · · + n = 21 n(n + 1), either using the formula for triangular numbers or P of the sum of an arithmetic series. So G(n) = 41 n(n + 1). Therefore
- G(n) > 150 ⇐⇒ 4 n(n + 1) > 150 ⇐⇒ n(n + 1) > 600
- So we can try values: 25 is a nice number to calculate with, so we start with options C and D:
- 24 × 25 = 600 25 × 26 = 650
- so n = 25 is the smallest positive integer for which G(n) > 150, and the answer is D.

## Q18
Answer: `A`

Work:
- We can do this algebraically. A translation of the graph of y = f(x) by 2 units in the positive y-direction gives the graph of y = f(x) + 2 A stretch of factor k parallel to the x-axis gives the graph of y = f( k1 x) = f( xk ) For these to be the same, we need f(x) + 2 = f( k1 x) for all (positive) x. In our case, f(x) = log10 x, so we require
- log10 x + 2 = log10 ( xk )
- But log10 ( xk ) = log10 x - log10 k, so we require log10 k = -2, giving k = 10-2 = 0.01. Hence the answer is A.
- We have done more than required to answer this question: we have actually shown that these transformations are equivalent. An alternative approach is to assume that the question is correct and that these transformations are equivalent, and to use a single point to find the value of k. We could see which point ends up on the x-axis after the translation: it was at (a, -2), so it must have been at (0.01, -2). Therefore the translated graph crosses the x-axis at 0.01, while the original graph crossed the x-axis at 1. Therefore the stretch needs to be by a factor of 0.01 parallel to the x-axis. We could have done a similar calculation with any other point.

## Q19
Answer: `D`

Work:
- We can sketch the graph of y = x2 + bx + c. It intersects the x-axis at p and q, and intersects the y-axis at c < 0. So the graph must look like this:
- y
- x p 0 q
- However, the vertex might be either side of the y-axis. To solve the inequality x2 + bcx + c3 < 0, we need to find where this equals zero. We can use the quadratic formula for this: x2 + bcx + c3 = 0 when p -bc ± (bc)2 - 4c3 x= p2 = 2 (-bc ± b2 c2 - 4c3 ) p = 12 c(-b ± b2 - 4c)
- Going back to the original quadratic, we can solve it to find p and q in terms of b and c: p p, q = 12 (-b ± b2 - 4c)
- Comparing these, we see that the roots of x2 + bcx + c3 are pc and qc in some order. So the solution is C or D. To distinguish between these possibilities, we need to know which is the larger of pc and qc. Note that we were told that c < 0. Since p < q, it follows that pc > qc, and so the answer is D. It turns out that we didn’t actually need our graph sketch.
- A somewhat less obvious approach to this question is as follows. We can divide the second inequality by c2 > 0, so x2 + bcx + c3 < 0 is equivalent to
- x2 bx + +c<0 c2 c or  x 2 x +b +c<0 c c This is the same as our original inequality, just with x replaced by xc , so its solution is p < xc < q. Multiplying this by c < 0 then gives the solution pc > x > qc.

## Q20
Answer: `E`

Work:
- It would be really helpful to sketch this triangle so that we don’t get confused! We will write θ for the angle ∠P RQ.
- R
- θ a a+d Q
- a + 2d P
- It is clear that we want to use the cosine rule to relate the three sides and the angle θ. Using ‘c2 = a2 + b2 - 2ab cos C’, we have
- (a + 2d)2 = a2 + (a + d)2 - 2a(a + d) cos θ
- which we can expand and simplify to give
- a2 + 4ad + 4d2 = 2a2 + 2ad + d2 - 2a(a + d) cos θ
- Rearranging gives a2 - 2ad - 3d2 cos θ = 2a(a + d) We can simplify this by noticing that the numerator factorises:
- (a + d)(a - 3d) a - 3d cos θ = = 2a(a + d) 2a
- Since 3d > 2a, a - 3d < -a, and so cos θ < -a 1 ◦ 2a = - 2 . This gives θ > 120 , and so the answer must be option E. We can go further and show that θ < 180◦ . Since P QR is a triangle, the length P Q must be less than the sum of P R and RQ, that is a + 2d < a + d + a, so d < a. This gives cos θ > -2a 2a = -1 so θ < 180◦ .
- An alternative approach is to just try values for d. We are given that d > 23 a, so we could try d = 23 a. This gives side lengths of a, 53 a, 73 a, which we can take to be 3, 5, 7 if we choose a = 3. Plugging these lengths into the cosine rule gives θ = 120◦ , so this is one limit. We are allowed larger values of d. If we take d too large, then we will no longer have a triangle, as P Q > P R + RQ. So as d increases, the angle θ must increase too. Therefore the answer must be E: 120◦ < θ < 180◦ .
- We are Cambridge Assessment Admissions Testing, part of the University of Cambridge. Our research-based tests provide a fair measure of skills and aptitude to help you make informed decisions. As a trusted partner, we work closely with universities, governments and employers to enhance their selection processes.
- Cambridge Assessment Admissions Testing The Triangle Building Shaftesbury Road Cambridge CB2 8EA United Kingdom
- Admissions tests support: admissionstesting.org/help

## Answer Summary

`1C 2C 3A 4B 5C 6B 7B 8A 9F 10E 11A 12B 13C 14F 15B 16E 17D 18A 19D 20E`
