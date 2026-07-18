# TMUA 2021 Paper 1 Worked Notes

Sources:
- Paper PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7100_TMUA%202021%20Paper%201.pdf>
- Official worked solutions PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7101_TMUA%202021%20Paper%201%20Official%20Solutions.pdf>
- Answer key PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7102_TMUA%202021%20Answer%20Key.pdf>

## Notes
- These notes are generated from the official worked solutions and cleaned into markdown.
- Each section keeps the official answer option and a cleaned version of the official reasoning.

## Q1
Answer: `F`

Work:
- Approach 1: using the equations of the circles We can find the equation by solving the equations of the circles simultaneously. The equations are
- (x + 2)2 + (y - 1)2 = r2 (x - 3)2 + (y + 2)2 = r2
- (We do not know the radius, so we have called it r; we are given that both circles have the same radius.) We can expand the brackets to give
- x2 + 4x + 4 + y 2 - 2y + 1 = r2 x2 - 6x + 9 + y 2 + 4y + 4 = r2
- Subtracting these equations then gives an equation which must be satisfied by any points lying on both circles: 10x - 6y - 8 = 0 which simplifies to 5x - 3y = 4, and so the answer is F.
- Approach 2: using geometry The circles have the same radius, so by symmetry, the straight line through the two points of intersection must be the perpendicular bisector of the line segment joining the two circle centres, as shown in this diagram:
- In our case, the two centres are at (-2, 1) and (3, -2), so the midpoint is as ( 21 , - 12 ). The gradient -2-1 of the line joining the centres is 3-(-2) = - 35 . Therefore the gradient of the perpendicular bisector is 53 , and it has equation
- y - (- 12 ) = 35 (x - 12 )
- Multiplying by 3 gives 3y + 23 = 5(x - 12 ) which rearranges to give 5x - 3y = 4 which is option F.

## Q2
Answer: `F`

Work:
- We first find the turning points by differentiation. We have dy = 3x2 - 6 = 0 if and only if x2 = 2 dx sqrt sqrt so α = - 2 and β = 2. We can now compute the integral:
- sqrt 2 Z β x3 - 6x + 3 dx = 1 4 2 x - 3x + 3x sqrt 4 - 2 α sqrt sqrt sqrt  sqrt sqrt sqrt  = 14 ( 2)4 - 3( 2)2 + 3( 2) - 1 4 (- 2)4 - 3(- 2)2 + 3(- 2) =6 2
- where to get the last line, we note that the first terms in each sqrt bracketsqrtcancel with each other, and similarly for the second terms, so we are left with just 3 2 - (-3 2). This is option F.

## Q3
Answer: `G`

Work:
- Let us write the arithmetic progression as 1 1 1 1 2, 2 + d, 2 + 2d, 2 + 3d, ...
- and the geometric progression as 1 1 1 2 1 3 2, 2 r, 2r , 2r , ...
- Then the given information about the second terms and third terms can be written algebraically as 1 1 1 2 + d + 2r = 2 1 1 2 1 2 + 2d + 2 r = 8
- The first equation simplifies to give d + 12 r = 0, so d = - 12 r. We can then substitute this into the second equation to give 1 1 2 1 2 + 2r - r = 8
- (We could equivalently have eliminated d by subtracting twice the first equation from the second.) Multiplying by 8 and rearranging slightly gives
- 4r2 - 8r + 3 = 0.
- We can solve this by factorising or using the formula, for example; this gives p 8 ± (-8)2 - 4 × 4 × 3 r= = 21 or 23 2×4
- Since the geometric progression is convergent, we must have |r| < 1, so r = 21 and the sum to infinity is a ( 21 ) Sinfinity = = =1 1-r 1 - 21 so the answer is option G.

## Q4
Answer: `B`

Work:
- This function is a quadratic in u = 2x ; we can rewrite it as
- u2 - 23 u + 4
- or u2 - 8u + 4. We can complete the square to express this as
- (u - 4)2 - 42 + 4 = (u - 4)2 - 12.
- The minimum therefore occurs when u = 4, at which point the function value is 12. We must also check that this value can actually be attained: u = 4 if and only if 2x = 4, which happens when x = 2, so this minimum is attained, and the correct answer is B. The minimum can also be found using calculus: differentiating u2 - 8u + 4 gives 2u - 8; this is zero when u = 4, at which point the function value is 42 - 8 × 4 + 4 = -12; this is a minimum as the function is a quadratic with positive u2 coefficient.

## Q5
Answer: `F`

Work:
- We can rewrite f(9), f(16) and f(24) using the information given about the function:
- f(9) = f(3 × 3) = f(3)f(3) as 9 is a multiple of 3 f(16) = f(16 × 1) = 16 as 16 is not a multiple of 3 f(24) = f(3 × 8) = f(3)f(8) as 24 is a multiple of 3 = f(3)f(8 × 1) = f(3) × 8 as 8 is not a multiple of 3 = 8f(3)
- Substituting these into the given equation then gives 2 f(3) + 16 - 8f(3) = 0
- which is a quadratic in f(3); we can factorise it to give 2 f(3) - 4 =0
- which has one (repeated) solution: f(3) = 4. Hence the answer is option F.

## Q6
Answer: `D`

Work:
- This is almost a function in cos x except for the sin2 x term, so we rewrite this in terms of cos x: cos x + 3 cos x + 3 f(x) = 2 = 7 + 5 cos x - (1 - cos x) 6 + 5 cos x + cos2 x
- We can then factorise the denominator to give cos x + 3 f(x) = (cos x + 2)(cos x + 3)
- and the cos x + 3 factor cancels. (We should also check that this can never be zero; if it were, the function would be undefined at some points.) Therefore we can write f(x) = cos x + 2
- The maximum value of this function occurs where cos x = -1, giving f(x) = 1, and the minimum value occurs where cos x = +1, giving f(x) = 13 . The difference between the minimum and maximum values is therefore 1 - 13 = 23 , which is option D.

## Q7
Work:
- Let us start with the condition xf(x) > 0 for all non-zero values of x. When x > 0, this means that f(x) > 0, as we can divide the inequality by x and the direction of the inequality is unchanged. On the other hand, when x < 0, this gives f(x) < 0, since dividing by x now changes the direction of the inequality. In summary:
- f(x) > 0 when x > 0 f(x) = 0 when x = 0 f(x) < 0 when x < 0
- Now let us turn to the integrals. The final question asks about an integral from -2 to 0, so we would do well to split the two given integrals into the ranges -2 to 0 and 0 to 2:
- Z 2 Z 0 Z 2 f(x) dx = f(x) dx + f(x) dx -2 -2 0 =4
- Z 2 Z 0 Z 2 |f(x)| dx = |f(x)| dx + |f(x)| dx -2 -2 0 Z 0 Z 2 = -f(x) dx + f(x) dx -2 0 Z 0 Z 2 =- f(x) dx + f(x) dx -2 0 =8
- Therefore Z 0 Z 2 f(x) dx + f(x) dx = 4 -2 0 Z 0 Z 2 - f(x) dx + f(x) dx = 8 -2 0
- R0 If we now add these two simultaneous equations together, the -2 f(x) dx terms cancel and we R2 R2 R0 are left with 2 0 f(x) dx = 12, so 0 f(x) dx = 6 and -2 f(x) dx = -2. R0 The question asks us to evaluate -2 f(|x|) dx. Thinking about graph transformations, the graph of y = f(x) is transformed into the graph of y = f(|x|) by removing the left half of the graph (left of the y-axis) and reflecting the right half of the graph in the y-axis (the line x = 0). The integral of this transformed function from -2 to 0 is therefore equal to the integral of the original function from 0 to 2, thus Z 0 Z 2 f(|x|) dx = f(x) dx = 6 -2 0 and the correct option is G.

## Q8
Answer: `A`

Work:
- A straight line meets a quadratic at exactly one point if and only if there is a repeated root to the simultaneous equations. Substituting for y in the first pair gives
- 2x + 3 = x2 + bx + c.
- This rearranges to x2 + (b - 2)x + (c - 3) = 0. As this has a repeated root, its discriminant must be zero, so (b - 2)2 - 4(c - 3) = 0. The second line likewise gives (b - 4)2 - 4(c + 2) = 0. Expanding and simplifying these two equations gives the following simultaneous equations for b and c:
- b2 - 4b - 4c = -16 b2 - 8b - 4c = -8
- Subtracting these two equations gives 4b = -8 so b = -2 and hence c = 7. Therefore b-c = -9, which is option A.

## Q9
Work:
- We first need to work out what the graph looks like. There are four cases for x and y depending on whether there are positive or negative. We list them in a table:
- quadrant x y |x| |y| equation rearranged to y = · · · 1st + + x y x+y =1 y = -x + 1 2nd - + -x y -x + y = 1 y = x+1 3rd - - -x -y -x - y = 1 y = -x - 1 4th + - x -y x-y =1 y = x-1
- We therefore have (at most) four lines making up this graph, and we can sketch these. We need to recall that we only draw the part of each line that appears within the relevant quadrant; for example, y = x + 1 only appears in the 2nd quadrant.
- y
- x -1 1
- -1
- This shape is a square. We can think of it as made up of 4 right angled triangles, each with base and height equal to 1, so each has area 12 × 1 × 1 = 12 , and hence the square has area 2. Thus the correct option is C.

## Q10
Answer: `B`

Work:
- The interval has width 2 - 12 = 32 , so each strip will have width 21 . The boundaries of the three strips will be at 12 , 1, 32 and 2. The trapezium rule then gives the estimate (writing f(x) = 2 log10 x): Z 2 f(x) dx ≈ 21 × 21 f( 12 ) + 2f(1) + 2f( 23 ) + f(2) 
- We can now work out the individual function values:
- f( 12 ) = 2 log10 12 = -2 log10 2 f(1) = 2 log10 1 = 0 f( 32 ) = 2 log10 32 = 2 log10 3 - 2 log10 2 f(2) = 2 log10 2
- Therefore we get the approximation Z 2 f(x) dx ≈ 12 × 12 -2 log10 2 + 2 × 0 + 2(2 log10 3 - 2 log10 2) + 2 log10 2 
- = 41 (4 log10 3 - 4 log10 2) = log10 3 - log10 2 = log10 32
- which is option B.

## Q11
Answer: `A`

Work:
- The function is decreasing when f ′ (x) < 0 (and possibly also at points where f ′ (x) = 0). We have f(x) = x15/7 - x8/7 + x1/7 so
- f ′ (x) = 15 7 x 8/7 - 87 x1/7 + 17 x-6/7 = 17 x-6/7 (15x2 - 8x + 1) = 71 x-6/7 (5x - 1)(3x - 1)
- This is negative when (5x - 1)(3x - 1) < 0 (note that we are only considering the region x > 0 here). We note that (5x - 1)(3x - 1) = 0 exactly when x = 15 or x = 13 and is therefore negative when 1 1 1 1 5 < x < 3 . Therefore the function f(x) is decreasing when 5 < x < 3 (and possibly also at the endpoints of this interval). Thus the fraction of the interval 0 < x < 1 for which f(x) is decreasing is 13 - 15 = 15 , which is option A.

## Q12
Answer: `E`

Work:
- We can complete the square with the first function: we have
- x4 - p2 x2 = (x2 - 12 p2 )2 - 41 p4
- This attains its minimum value when the parenthesised expression is 0, that is when x = ± sqrt12 p. At that point, x4 - p2 x2 = - 41 p4 = -9, so p4 = 36. Since p is a real number, we must have p2 = 6 (rather than -6). We now consider x2 - px + 6. We can again complete the square to get
- x2 - px + 6 = (x - 12 p)2 - 41 p2 + 6.
- The minimum of this function again occurs when the parenthesised expression is 0, that is when x = 12 p. At this point,
- x2 - px + 6 = - 41 p2 + 6 = - 14 × 6 + 6 = 92
- and so the answer is option E. Alternatively, we could have used calculus instead of completing the square to find the minima; the results would be the same.

## Q13
Answer: `C`

Work:
- Let us first work out the value of the integral in the summation (the summand). We have Z r Z 1 Z 2 Z r f(x) dx = f(x) dx + f(x) dx + · · · + f(x) dx 0 0 1 r-1 = (0 + 1) + (1 + 1) + · · · + ((r - 1) + 1) = 1 + 2 + ··· + r = 12 r(r + 1).
- We are thus being asked to evaluate X 2 r(r + 1). r=1
- There are algebraic methods to do this (as mentioned below), but they are not on the specification. The most straightforward approach here is to just perform the calculation manually: X 2 r(r + 1) = 1 + 3 + 6 + 10 + 15 + 21 + 28 + 36 = 120, r=1
- which is option C.
- In general, it turns out that n X 1 1 2 r(r + 1) = 6 n(n + 1)(n + 2). r=1
- The expressions r(r + 1) and n(n + 1)(n + 2) are known as rising powers, and can be written as r2 and n3 respectively. On multiplying by 2, the formula then becomes n X r2 = 13 n3 , r=1 Rx which looks very similar to the calculus formula 0 t2 dt = 31 x3 . There is a much longer discussion of sums such as this in Graham, Knuth and Patashnik, Concrete Mathematics.

## Q14
Answer: `B`

Work:
- We do not know a method of solving equations involving both trigonometric functions (on the right-hand side) and quadratics (on the left-hand side), but the question only asks us to count the number of solutions, not to solve the equation. So we will instead sketch the graphs of the left-hand and right-hand sides and see how many times they intersect. The graph of y = (x + 1)(3 - x) is a quadratic with roots at x = -1 and x = 3. When expanded, it becomes y = -x2 + · · · , so it has a maximum point midway between the roots, at x = 1, y = 4.
- 4 y x -4 -3 -2 -1 0 1 2 3 4 5 6 -2 -4
- The graph of y = 2(1 - cos(pix)) is a transformed cosine graph. y = cos(pix) has a period of 2: it is the graph of y = cos x scaled by a factor of 1/pi in the x-direction, and looks like this:
- y
- x -4 -3 -2 -1 0 1 2 3 4 5 6
- -1
- We can then work out the graph of y = 1 - cos(pix) by calculating the values of y at a few key points, or by observing that the graph of y = - cos(pix) is the reflection of y = cos(pix) in the x-axis, and then y = 1 - cos(pix) is this translated by 1 unit in the y-direction. The result is:
- 2 y
- x -4 -3 -2 -1 0 1 2 3 4 5 6
- Finally, the graph of y = 2(1 - cos(pix)) is the previous graph scaled by a factor of 2 in the y-direction:
- 4 y
- x -4 -3 -2 -1 0 1 2 3 4 5 6
- We can now superimpose the graph of y = (x + 1)(3 - x) on top of y = 2(1 - cos(pix)). We see that the trigonometric graph is never below the x-axis, so the only possible points of intersection are between x = -1 and x = 3. There is one point of intersection at (1, 4), one between x = -1 and x = 0 and one between x = 2 and x = 3, so there are three points of intersection in total.
- 4 y
- x -4 -3 -2 -1 0 1 2 3 4 5 6
- Thus the correct answer is option B.
- You might wonder about a subtle point: we see that the two graphs touch each other at (1, 4), but how do we know that the trigonometric graph is ‘sharper’ there, so does not also cross the quadratic graph close to x = 1, something like this:
- This is a plausible possibility, but it turns out not to be the case for reasons that are beyond the scope of the specification.

## Q15
Answer: `C`

Work:
- We can write the integral out in full by substituting the value of g(x): Z 1 10 Z 1X g(x) dx = f(2r-1 x) dx 0 0 r=1 Z 1 = f(20 x) + f(21 x) + f(22 x) + · · · + f(29 x) dx Z 1 Z 1 Z 1 Z 1 0 1 2 = f(2 x) dx + f(2 x) dx + f(2 x) dx + · · · + f(29 x) dx 0 0 0 0
- So we can calculate the integral of g(x) if we can calculate the integral of each f(2r-1 x). R1 R1 Now 0 f(20 x) dx = 0 f(x) dx is just the area under the graph of y = f(x) between x = 0 and x = 1, which is 21 (it is a right angled triangle with base and height both 1). R1 To work out 0 f(2x) dx, we consider the graph of y = f(2x). This is the graph of y = f(x) scaled by a factor of 1/2 in the x-direction, so looks like this:
- y
- x 0 1
- The area between x = 0 and x = 1 is again 21 . The graph of y = f(22 x) between x = 0 and x = 1 consists of two triangles:
- y
- x 0 1
- Helpfully, the area under this graph is still 12 : this is perhaps easiest to see by noticing that we can draw a rectangle (actually a square) around the graph:
- y
- x 0 1
- In each rectangular slice, half of the area is below the graph and half is above, so the total area below the graph is 12 . This same reasoning will apply for each of the functions f(2r-1 x), and so the total area is 10 × 21 = 5, which is option C.

## Q16
Answer: `B`

Work:
- We can expand the binomial expression in ascending powers of x using the binomial theorem:       n n n n-1 n n-2 2 2 n n-3 3 3 (a + bx) = a + a bx + a b x + a b x + ···+ 1 2 3   n abn-1 xn-1 + bn xn n-1
- n n-2 2 2 b x = 105x2 .  The third term in ascending powers of x is 2 a The fourth term in ascending powers of x is n3 an-3 b3 x3 = 210x3 . 
- n  3 n-3 n-3 The fourth term in descending powers of x is n-3 a b x = 210x3 . From the last statement, we see that n = 6. Then the first two statements give:   6 4 2 a b = 105   6 3 3 a b = 210
- 6 6   Now 2 = 15 and 3 = 20, so
- a4 b2 = 7 a3 b3 =
- Dividing these two equations gives a 2 = b 3 a 2 = 49 , which is option B.  and so b

## Q17
Work:
- We note that x2 + y 2 ≥ 0 for all x and y, so we need only consider non-negative values of x2 + y 2 that satisfy this equation. Those with x2 + y 2 ≤ 8pi are pi 5pi 13pi 17pi 25pi 29pi 37pi 41pi x2 + y 2 = , , , , , , , 6 6 6 6 6 6 6 6 (These were obtained by noting that the solutions with x2 + y 2 ≤ 2pi are pi6 and 5pi 6 , and then 12pi adding multiples of 2pi = 6 to these.) Consider the first value; x2 + y 2 = pi6 ; this is a circle with radius pi/6. Likewise, the other p p p p circles have radii 5pi/6, . . . , 41pi/6. Taking out a common factor of pi/6, we see that the circles have radii: sqrt sqrt sqrt sqrt sqrt sqrt sqrt r pi ρ , ρ = 1, 5, 13, 17, 25, 29, 37, 41
- We can approximate these square roots to get an idea of how they grow:
- ρ ≈ 1, 2, 3.5, 4, 5, 5.5, 6, 6.5
- So the smallest three circles are quite far apart, but after that, they get closer and closer, which is graph A. (We can be more precise than this, and observe that the circles appear in close pairs with larger gaps between the pairs, but that is not needed to answer this question.)

## Q18
Answer: `B`

Work:
- We should start by sketching the original curve. This is a quadratic in y. It does not factorise, but we can complete the square: x = (y - 3)2 + 2 It therefore has its vertex at y = 3, x = 2, and x ≥ 2 for all values of y. We can then sketch it:
- y
- P (2, 3)
- x -2 0 2 4 6
- The vertex of the parabola is 4 units to the right of P . Now rotating this by 90◦ clockwise about P moves the vertex to 4 units below P , that is (-2, -1), giving the following:
- y
- P (2, 3)
- x -4 -2 0 2 4 6
- -2
- -4
- This curve then has equation y = -(x + 2)2 - 1, which we can expand to y = -x2 - 4x - 5 giving option B.

## Q19
Answer: `B`

Work:
- We can start by solving the equation before considering the possible values of x. We have sqrt cos θ ◦  3 sin 4 × 60 =± so that 4cos θ × 60◦ = 60◦ , 120◦ , 240◦ , 300◦ , . . . (noting that the left hand side is always positive, so we do not need to consider negative values for the right hand side). Dividing by 60◦ gives 4cos θ = 1, 2, 4, 5, . . . and so cos θ = 0, 21 or 1; there are no values of cos θ for which 4cos θ > 4. We can now find the possible values of θ:
- cos θ = 0 gives θ = 90◦ , 270◦ , 450◦ , . . . .
- cos θ = 12 gives θ = 60◦ , 300◦ , 420◦ , . . . .
- cos θ = 1 gives θ = 0◦ , 360◦ , . . . .
- Collecting these solutions and arranging them in increasing order gives θ = 0◦ , 60◦ , 90◦ , 270◦ , 300◦ , . . . . We are told that there are exactly three solutions in the range 0◦ ≤ θ ≤ x◦ . Therefore x ≥ 90 to get the third solution, and x < 270 to avoid getting the fourth solution. This gives the answer 90 ≤ x < 270, which is option B.

## Q20
Work:
- We can combine the logarithms on the right and rearrange the left hand side to give
- log10 (x - y)2 = log10 (2 - 2x)(y + 5) 
- and so (x - y)2 = (2 - 2x)(y + 5). Expanding the brackets gives
- x2 - 2xy + y 2 = 2y + 10 - 2xy - 10x
- which rearranges to x2 + y 2 + 10x - 2y = 10. Completing the squares gives (x + 5)2 + (y - 1)2 = 36 which is a circle with centre (-5, 1) and radius 6. The obvious answer is therefore 12pi, but we must take care: does every point on the circle satisfy the original equation? The manipulations we have performed make assumptions; in particular, for the logarithms to be defined, we require x - y > 0, 2 - 2x > 0 and y + 5 > 0, which we can rearrange to x > y, x<1 and y > -5 Let us sketch the circle and these three inequalities. Here is the circle with two points on the circumference marked:
- y
- (-5, 1) (1, 1) x
- (-5, -5)
- The restriction x < 1 holds for all of the points on the circle except for the single point (1, 1), and the restriction y > -5 holds everywhere except for (-5, -5). The restriction x > y is more significant for us. We can draw the line x = y on our sketch:
- y
- (-5, 1) (1, 1) x
- (-5, -5)
- The region x > y is below this line, and we see that only part of the circle is included in the region. Since the points of intersection of the line x = y with the circle are at (1, 1) and (-5, -5), it is clear that exactly one quarter of the circle lies in the region x > y. Therefore the length of the curve with the given equation is 14 of the circumference of the circle, that is, 41 × 12pi = 3pi, and the correct option is D.
- This document was initially designed for print and as such does not reach accessibility standard WCAG 2.1 in a number of ways including missing text alternatives and missing document structure.
- If you need this document in a different format please email admissionstesting@cambridgeassessment.org.uk telling us your name, email address and requirements and we will respond within 15 working days.
- This document contains maths equations and symbols which at present we are not able to produce adequately for accessibility. We are working to improve this.
- We are Cambridge Assessment Admissions Testing, part of the University of Cambridge. Our research-based tests provide a fair measure of skills and aptitude to help you make informed decisions. As a trusted partner, we work closely with universities, governments and employers to enhance their selection processes.
- Cambridge Assessment Admissions Testing The Triangle Building Shaftesbury Road Cambridge CB2 8EA United Kingdom
- Admissions tests support: admissionstesting.org/help

## Answer Summary

`1F 2F 3G 4B 5F 6D 8A 10B 11A 12E 13C 14B 15C 16B 18B 19B`
