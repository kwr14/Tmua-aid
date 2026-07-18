# TMUA Practice Paper 1 Worked Notes

Sources:
- Paper PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f711e_TMUA%20Practice%20Paper%201.pdf>
- Official worked solutions PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f711f_TMUA%20Practice%20Paper%201%20Official%20Solutions.pdf>
- Answer key PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7120_TMUA%20Practice%20Paper%20Answer%20Key.pdf>

## Notes
- These notes are generated from the official worked solutions and cleaned into markdown.
- Each section keeps the official answer option and a cleaned version of the official reasoning.

## Q1
Answer: `H`

Work:
- We expand (ax + b)3 and compare with the given expansion.
- (ax + b)3 = a3 x3 + 3a2 bx2 + 3ab2 x + b3 = 8x3 - px2 + 18x - 3 3.
- So we must have:
- a3 = 8 3a2 b = -p 3ab2 = 18 b3 = -3 3 The final equation can be rewritten as b3 = -3 2 , so b = -3 2 = - 3. 3 1
- Then the third equation becomes 3a × 3 = 18, so a = 2. sqrt sqrt Finally, the second equation gives 3 × 22 × (- 3) = -p, so p = 12 3 and the answer is H.

## Q2
Answer: `E`

Work:
- We can use the factor theorem to find the value of a; alternatively we can just divide by (x + 2) and deduce a that way, as we will need to divide by (x+2) anyway to complete the factorisation. We show both methods. The factor theorem states that in this case, f(-2) = 0, where f(x) is the polynomial. So 3(-2)3 + 13(-2)2 + 8(-2) + a = 0, giving -24 + 52 - 16 + a = 0, so a = -12. We can now divide the polynomial by (x + 2). Alternatively, dividing the given polynomial by (x + 2) by considering the x3 , x2 and x terms, but ignoring the constant term, gives:
- 3x3 + 13x2 + 8x + a = (x + 2)(3x2 + 7x - 6)
- and so a = -12, though that is actually not needed to answer the question. Finally, we can factorise 3x2 + 7x - 6 to determine the answer. Alternatively, we can use the suggested options: only options D and E give a constant term in the quadratic of -6, so it must be one of those. D expands to 3x2 - 7x - 6 and E expands to 3x2 + 7x - 6, so the answer is E.

## Q3
Answer: `C`

Work:
- We need to find the gradient of the curve at (1, 2). We have y = 2x-2 and so dx dy = -4x-3 . At x = 1, this gives dx = -4 and so the normal has gradient 4 . As it passes through (1, 2), it has dy 1
- equation y - 2 = 41 (x - 1).
- It cuts the x-axis (y = 0) at P , so at P , we have -2 = 14 (x - 1), giving x = -7, and so P has coordinates (-7, 0). It cuts the y-axis (x = 0) at Q, so at Q, we have y - 2 = 41 (-1), giving y = 74 , and so Q has coordinates (0, 47 ). Thus P Q has length sqrt 7 7 17 q p 72 + ( 4 )2 = 42 + 1 = 4 4 (where we have written 7 = 74 × 4 for the first equality). Hence the answer is C.

## Q4
Answer: `B`

Work:
- Commentary: This looks quite scary! It is unlikely that you have ever seen a sequence looking like this, so a sensible thing to do is to work out the first few values and look for any patterns.
- We calculate the first few terms of the sequence:
- a1 = (-1)1 - (-1)0 + (-1)3 = (-1) - 1 + (-1) = -3 a2 = (-1)2 - (-1)1 + (-1)4 = 1 - (-1) + 1 = 3 a3 = (-1)3 - (-1)2 + (-1)5 = (-1) - 1 + (-1) = -3 a4 = (-1)4 - (-1)3 + (-1)6 = 1 - (-1) + 1 = 3
- The pattern is now clear (and we could prove it if we wished to): the sequence goes -3, 3, -3, 3, -3, 3 and so on. So the sum of each pair of terms is zero: a1 + a2 = 0, a3 + a4 = 0, …, a37 + a38 = 0. Thus X an = (a1 + a2 ) + (a3 + a4 ) + · · · + (a37 + a38 ) + a39 n=1 = 0 + 0 + · · · + 0 + (-3) = -3
- and the answer is B.

## Q5
Answer: `C`

Work:
- To answer this question, it is worth drawing a sketch. The graph is of y = x2 - 1 = (x + 1)(x - 1), so the parabola intersects the x-axis at (1, 0) and (-1, 0):
- y
- x -2 -1 1 2
- To find the area enclosed, we integrate over the three separate regions, from -2 to -1, from -1 to 1, and from 1 to 2: Z -1 -1 x2 - 1 dx = 13 x3 - x -2  -2 = (- 31 + 1) - (- 83 + 2) = 43 Z 1 1 x2 - 1 dx = 13 x3 - x -1  -1 = ( 31 - 1) - (- 13 + 1) = - 43 Z 2 2 x2 - 1 dx = 13 x3 - x 1  = ( 38 - 2) - ( 13 - 1) = 43
- Thus the three areas are each 43 , and the total area is 4, so the answer is C.

## Q6
Answer: `C`

Work:
- We can either work in fractions or percentages. This solution works in fractions. The fraction of red paint in P is 10 and in Q is 51 . Let the fraction of red paint in R be x. The combination is in the ratio 12 : 5 : 3, with 14 red paint, so the composition is as follows:
- Paint Volume Red P 12 3 12 × 10 Q 5 5 × 51 R 3 3x total 20 20 × 14
- We can now sum the individual red amounts, giving:
- 3 1 12 × 10 +5× + 3x = 20 × 14
- 5 + 3x = 5, giving 3x = 5 = 40%, so x = 13 3 %. so 23 2 1
- The correct answer is C.

## Q7
Answer: `B`

Work:
- There are two factors for each member: whether the member is a man or woman, and whether the member plays tennis or cricket. We can either display this situation as a tree diagram or as a two-way table. Since the information given has both the fraction of male members who play cricket and the fraction of the cricketing members who are women, it will be simpler to use a two-way table. (In a tree diagram, we could easily display one of the two, but the other will be hard.) We could also work with fractions or with numbers of people. In this solution, we will work with numbers. The 60% suggests that we work with a multiple of 100 people, and the presence of a fraction 23 , suggests that we work with a multiple of 3. So we start with 300 people. This is the information we obtain from the 60% of members are women and 52 of the resulting 120 male members play cricket:
- Men Women Total Tennis 72 Cricket 48 Total 120 180 300
- We are also told that 23 of the cricketing members are women, so the 48 cricketing men are 31 of the cricketers, hence 96 cricketers are women, leaving 84 women to play tennis:
- Men Women Total Tennis 72 84 (156) Cricket 48 96 (144) Total 120 180 300
- (The parenthesised figures are not needed to finish the question.) Therefore the probability that a member of the club, chosen at random, is a woman who plays 84 28 7 tennis is = = , and the answer is B. 300 100 25

## Q8
Answer: `F`

Work:
- We note that the only angle involved is 2x, and 0◦ ⩽ x ⩽ 360◦ gives 0◦ ⩽ 2x ⩽ 720◦ . We start by writing everything in terms of sin 2x, giving: (1 - sin2 2x) + 3 sin 2x - 74 = 0
- which rearranges to give sqrt sin2 2x - 3 sin 2x + 34 = 0. We can apply the quadratic formula to this to obtain sqrt sqrt sqrt 3± 3-3 3 sin 2x = = 2 2 and hence the possible values of 2x in the range are 2x = 60◦ , 120◦ , 420◦ and 480◦ . Thus the largest possible value of x in the range 0◦ ⩽ x ⩽ 360◦ is 240◦ , and the answer is F.

## Q9
Answer: `D`

Work:
- The initial circle looks like this:
- y
- (7, 5)
- (3, 3)
- x
- 3 + 7 3 + 5 The centre of the circle is at the midpoint of this diameter, which is , = (5, 4), 2 2 and the radius is therefore p sqrt (5 - 3)2 + (4 - 3)2 = 5.
- The transformations do the following to the centre and radius of the circle:
- Centre Radius original (5, 4) sqrt5 after translation (2, 4) sqrt5 after reflection (2, -4) sqrt5 after enlargement (2, -4) 4 5
- Therefore the final circle has equation (x - 2)2 + (y + 4)2 = (4 5)2 = 80
- and the answer is D.

## Q10
Answer: `E`

Work:
- We can rearrange this equation as tan x = . (We note that x = 0 is not a solution of the x original equation x tan x = 1, so we can divide by x without losing any solutions.) It is impossible to solve this equation exactly, but we are only asked for the number of solutions. Therefore we sketch the graphs of y = tan x and y = x1 on the same axes, and count the number of intersections.
- y
- x -2pi -pi 0 pi 2pi
- There are four points of intersection with -2pi ⩽ x ⩽ 2pi, so the answer is 4, which is option E.

## Q11
Answer: `E`

Work:
- This is a quadratic in 22x , so we write y = 22x and solve for y. The quadratic becomes
- y 2 + 12 = 8y
- as 42x = (22 )2x = 24x = (22x )2 and 22x+3 = 22x × 23 . This rearranges to y 2 - 8y + 12 = 0, which factorises as (y - 6)(y - 2) = 0, so y = 6 or y = 2. Thus 22x = 6 or 22x = 2, with the value of x being larger in the first than in the second, so 22p = 6 and 22q = 2. The options are given in terms of log to base 10, so we take log10 of the first equation. Thus 2p log10 2 = log10 6 and 2q = 1, and hence
- log10 6 1 p= and q = . 2 log10 2 2
- Therefore log10 6 1 p-q = - 2 log10 2 2 log10 6 - log10 2 = 2 log10 2 log10 3 = log10 4
- so the answer is option E.

## Q12
Answer: `E`

Work:
- Let the radius of the cylinder be r. Then the diagram is as follows (with all measurements in cm), where we have drawn in two extra lines:
- r h 5
- The 5cm is the radius of the sphere and hence of the circle shown (as the cross section is through the centre of the sphere). Pythagoras’s theorem gives h2 + r2 = 52 , and the volume of the cylinder is V = pir2 (2h) = pi(52 - h2 )(2h) = 2pi(25h - h3 ). We can maximise this by differentiating with respect to h. (We could write everything in terms of r instead, but that would involve square roots.) dV 5 We have = 2pi(25 - 3h2 ), which is zero when 25 = 3h2 , so h = sqrt . Substituting this into dh 3 the formula for V gives the largest possible V as   sqrt 2 2 25 5 500 500 3 V = 2pi(5 - h )h = 2pi 25 - sqrt = sqrt pi= pi 3 3 3 3 9
- hence the answer is E.

## Q13
Answer: `C`

Work:
- Commentary: This is not something that you will have learnt how to do, and in general, this is a very difficult problem indeed. But we can use the tools at our disposal to do something helpful. We don’t know how to solve a quintic (x5 ) equation, but we can at least try to find the turning (stationary) points, and see where that gets us.
- We attempt to sketch the graph of y = 3x5 - 10x3 - 120x + 30, or at least think about what a sketch might look like. We calculate dy = 15x4 - 30x2 - 120 = 15(x4 - 2x2 - 8) = 15(x2 - 4)(x2 + 2) dx
- so there are stationary points when dx dy = 0, that is, when x = 2 and when x = -2. We can now calculate the y-coordinates: when x = -2, y = -36 + 80 + 240 + 30 > 0 (we do not need to calculate the exact value), and when x = 2, y = 36 - 80 - 240 + 30 < 0. So the graph must look something like the following:
- y
- (-2, y)
- x
- (2, y)
- There are clearly 3 points of intersection of this graph with y = 0, so the original equation has 3 real roots, and the answer is C.

## Q14
Answer: `D`

Work:
- Let us write out the first few terms of the three sequences explicitly. Let the common ratio of T be R and the common ratio of U be r.
- term 1 2 3 4 5 … n … T 4 4R 4R2 4R3 4R4 … 4Rn-1 … U 4 4r 4r2 4r3 4r4 … 4rn-1 … S 8 4R + 4r 4R + 4r2 2 4R + 4r3 3 4R + 4r4 4 … 4R n-1 + 4rn-1 …
- We are given the first three terms of S, so
- 8=8 4R + 4r = 3 4R2 + 4r2 = 45
- Therefore R + r = 34 and R2 + r2 = 16 . We can work out the values of R and r by guessing, or we can work them out by solving these equations. We show the second approach here. The first equation gives R = 34 - r, which we can substitute into the second equation to give
- ( 34 - r)2 + r2 = 16
- so 2r2 - 32 r + 14 = 0, hence 8r2 - 6r + 1 = 0, which factorises as (4r - 1)(2r - 1) = 0, giving r = 21 or r = 14 and R = 14 or R = 12 respectively. We can therefore work out the sums to infinity of T and U, taking R = 14 and r = 12 :
- sum to infinity of T = = 16 1 - 41 sum to infinity of U = =8 1 - 21
- giving the sum to infinity of S as 16 3 + 8 = 3 , since S is the sum of T and U. If we took the
- values of R and r to be the other way round, we would have the series T and U swapped, but their sum would be unchanged. So the answer is D.

## Q15
Answer: `C`

Work:
- We start by expanding the brackets to get
- y = (2x + a)(x2 - 4ax + 4a2 ) = 2x3 - 7ax2 + 4a2 x + 8a3
- so the derivative is given by dy = 6x2 - 14ax + 4a2 . dx Therefore at x = 1, the gradient is 6 - 14a + 4a2 . To find the least possible value of this as a varies, we can either differentiate this expression with respect to a or complete the square. The latter approach gives
- 4a2 - 14a + 6 = 4(a2 - 72 a) + 6 = 4 (a - 74 )2 - ( 74 )2 + 6 
- = 4(a - 47 )2 - 49 4 +6 = 4(a - 47 )2 - 25
- so the minimum value is - 25 4 and the answer is C.

## Q16
Answer: `C`

Work:
- The first equation involves the sum of two logarithms, so we can rewrite it as:
- log10 (2(y - 1)) = log10 x2
- and so 2(y - 1) = x2 . The second equation becomes y + 3 - 3x = 1, as loga 1 = 0 for any base a. We therefore have two simultaneous equations:
- 2y - 2 = x2 y - 3x + 2 = 0.
- We want to find the values of y, so we rewrite the second equation to eliminate x: y+2 x= and so the first equation becomes (y + 2)2 2y - 2 = or 18y - 18 = y 2 + 4y + 4 which rearranges to give the quadratic y 2 - 14y + 22 = 0. The solutions to this quadratic are 14 ± 142 - 4 × 22 p sqrt = 7 ± 72 - 22 = 7 ± 27 and so the correct answer is C. It would be good to check whether both of these solutions are valid (though thesqrt question does not require us to do so). To be valid, we require both x > 0 and y > 1. Since 27 < 6, we see that y > 1. Also, as x = 31 (y + 2) and y > 0, it follows that x > 0. So there are, indeed, two valid solutions.

## Q17
Answer: `D`

Work:
- The formula for y is the product of two factors, namely 1 + 2 cos x and cos 2x. The whole expression is negative when one of the two factors is positive and the other is negative. The factors change sign when they cross a point where the factor is zero, and we can find these points:
- 1 + 2 cos x = 0 when cos x = - 21 , which is when x = 2pi 3 (within the range 0 < x < pi).
- cos 2x = 0 when x = pi4 and when x = 3pi 4 .
- We can now make a table showing the signs of the two factors in the different parts of the interval 0 < x < pi. (This is a useful technique in general.)
- 0 < x < pi4 x = pi4 pi 2pi 4 <x< 3 x = 2pi 2pi 3pi 3 <x< 4 x = 3pi 3pi 4 <x<pi 1 + 2 cos x + + + 0 - - - cos 2x + 0 - - - 0 + y + 0 - 0 + 0 -
- Therefore y is negative when pi4 < x < 2pi 3 and when 4 < x < pi, and so the answer is D. 3pi

## Q18
Work:
- This requires us to first differentiate the function. We therefore write 1-x 2 1 y= sqrt3 = x3 - x 3 x 2
- which we can differentiate to get dy 5 2 = - 32 x3 - 13 x3 dx This is zero when 5 2 - 32 x3 - 31 x3 = 0,
- so multiplying by 3x 3 to clear fractions in both the coefficients and in the powers gives
- -2 - x = 0
- so x = -2. (We could also have obtained this by writing - 23 x3 = 13 x3 and dividing one side 5 2
- by the other.) We next need to determine the sign of dx dy in each region. We note that the function is not defined at x = 0, so we have to deal with x < 0 and x > 0 separately. It is also not clear how to find the sign of dx dy directly from its given form, so we first factorise it, giving
- dy 5 = - 31 x3 (2 + x). dx (Incidentally, this gives yet another way to see that the derivative is zero at x = -2.) We can now work out the signs of the two factors, and hence of the derivative, in the various ranges:
- x < -2 x = -2 -2 < x < 0 x>0 - 35 x - - - + 2+x - 0 + + dy dx + 0 - +
- It is therefore increasing in the region x < -2 and x > 0. (It it not increasing at x = -2, but rather it is stationary at that point.) The correct answer is therefore A (though the question mistakenly says x ⩽ -2).

## Q19
Answer: `B`

Work:
- We expand the first expression up to powers of x3 to find its coefficient. We can think of the first expression as (1 + (2x + 3x2 ))6 and use the binomial theorem to expand it. We note that the first few binomial coefficients are         6 6 6 6×5 6 6×5×4 = 1; = 6; = = 15; = = 20. 0 1 2 2! 3 3!
- We thus have
- (1 + (2x + 3x2 ))6 = 1 + 61 (2x + 3x2 ) + 62 (2x + 3x2 )2 + 63 (2x + 3x2 )3 + · · ·   
- = 1 + 6(2x + 3x2 ) + 15((2x)2 + 2(2x)(3x2 ) + · · · ) + 20((2x)3 + · · · ) + · · ·
- where we have stopped when the powers reach 3. We can read off the coefficient of x3 from this; it is 15 × 2 × 2 × 3 + 20 × 8 = 340.
- We can expand (1 - ax2 )5 similarly, and obtain
- 1 + 51 (-ax2 ) + 52 (-ax2 )2 + · · · = 1 - 5ax2 + 10a2 x4 + · · ·  
- so the coefficient of x4 is 10a2 . We are told how these two coefficients relate to each other: we have
- 340 = 2 × 10a2 so a2 = 17 and a = ± 17, giving the answer as option B.

## Q20
Answer: `D`

Work:
- Let us label the midpoint of OR as T , so that we can refer to it. We first observe that since all the edges of the pyramid are of length 20m, the triangles are all equilateral. There are two ways to get from P to the midpoint of OR in a short distance: one can either travel along the base to RS and then along the triangular face to T , or one could travel along the triangular face OP S to the edge OS and from there to T . It is not obvious which route is shorter, so we will calculate both. (There are also routes which are mirror-reflections of these going via the edge QR or OQ.) To find these distances, we can “unfold” the tetrahedron, that is, make a net for the tetrahedron. For the first route, we draw just the faces P QRS and ORS:
- O
- T
- S R
- P Q
- sqrt sqrt sqrt The height of the triangle OSR is 20 sin 60◦ = 20 × 23 = 10 3, so T lies 5 3 above the line SR; T also lies 34 × 20 = 15 to the right of S (as it is at the midpoint of OR). We can therefore find the length P T using Pythagoras’s theorem: P T 2 = 152 + (20 + 5 3)2 = 225 + 400 + 200 3 + 75 = 700 + 200 3
- We now look at the other route, which we can do by drawing the triangles OP S and OSR:
- O T P R
- S
- Using sqrt the height of the triangle as calculated above, P lies 10 3 to the left of OS and T lies 5 3 to its right, while T lies 5 above P (being a quarter of OS). Pythagoras’s theorem therefore gives P T 2 = (15 3)2 + 52 = 225 × 3 + 25 = 700
- sqrt sqrt This is therefore the shorter of the two routes, and its length is 700 = 10 7, hence the solution is option D.
- We are Cambridge Assessment Admissions Testing, part of the University of Cambridge. Our research-based tests provide a fair measure of skills and aptitude to help you make informed decisions. As a trusted partner, we work closely with universities, governments and employers to enhance their selection processes.
- Cambridge Assessment Admissions Testing The Triangle Building Shaftesbury Road Cambridge CB2 8EA United Kingdom
- Admissions tests support: admissionstesting.org/help

## Answer Summary

`1H 2E 3C 4B 5C 6C 7B 8F 9D 10E 11E 12E 13C 14D 15C 16C 17D 19B 20D`
