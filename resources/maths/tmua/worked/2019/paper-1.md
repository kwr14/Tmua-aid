# TMUA 2019 Paper 1 Worked Notes

Sources:
- Paper PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f710a_TMUA%202019%20Paper%201.pdf>
- Official worked solutions PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f710b_TMUA%202019%20Paper%201%20Official%20Solutions.pdf>
- Answer key PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f710c_TMUA%202019%20Answer%20Key.pdf>

## Notes
- These notes are generated from the official worked solutions and cleaned into markdown.
- Each section keeps the official answer option and a cleaned version of the official reasoning.

## Q1
Answer: `A`

Work:
- We could try substituting in (1, -1) and (-1, 3) into the six given expressions: when we substitute in x = 1, only A, C, D and F give -1, so the answer must be one of these. When we substitute in x = -1 into these four, only A and C give 3, so the answer must be one of these two. Finally, we need a turning point at x = -1, so we differentiate these two: A gives -2x - 2, which is zero at x = -1, which C gives 2x - 2, which is -4 at x = -1. So the correct answer is A. Alternatively, we could work out the answer without reference to the given options. Let f(x) = ax2 + bx + c. We are given f(1) = -1 and f(-1) = 3, so
- a + b + c = -1 a-b+c=3
- Adding these gives 2a + 2c = 2, so a + c = 1 and hence b = -2. We then differentiate to get f 0 (x) = 2ax + b, so as f 0 (-1) = 0, we require -2a + b = 0, so a = -1 and c = 2. Hence the answer is A.
- c UCLES Page 3

## Q2
Work:
- Let us write the expression as x2 +(k +2)x+(1-2k) so that the coefficient of x and the constant are clear. The expression is positive for large values of x, and so is positive for all values of x if the discriminant is negative. Hence we require
- (k + 2)2 - 4(1 - 2k) < 0.
- Expanding and simplifying this gives
- k 2 + 12k < 0,
- so k(k + 12) < 0. If we sketch a graph of the function k(k + 12), we obtain
- y
- k -12
- We see that k(k + 12) < 0 for -12 < k < 0, so the correct option is A.
- c UCLES Page 4

## Q3
Answer: `E`

Work:
- The coefficient of x in the expansion of (1 + x)n is n1 = n, so the coefficient of x in this whole 
- expression is 0 + 1 + 2 + 3 + · · · + 79 + 80 = 21 × 80 × 81 using the formula for the sum of the first n positive integers, 12 n(n+1). This gives 40×81 = 3240, so the answer is E.
- c UCLES Page 5

## Q4
Answer: `C`

Work:
- We work out the first few terms, writing them in the form of the given options:
- x1 = 10 sqrt 1 -1 x2 = 10 = 10 2 = 102 -1  1 p -1 1 -2 x3 = 102-1 = 102 2 = 102 × 2 = 102 -99 As this pattern continues, we will end up with x100 = 102 , which is option C.
- c UCLES Page 6

## Q5
Answer: `E`

Work:
- Let the first term of S be a and the common ratio r, as usual. a(rn - 1) The sum of the first n terms of S is , so the second line of the question can be written r-1 as a(r6 - 1) 9a(r3 - 1) = r-1 r-1 which can be multiplied by (r - 1) and divided by a to give
- r6 - 1 = 9(r3 - 1).
- Writing R = r3 , this becomes R2 - 1 = 9R - 9, so R2 - 9R + 8 = 0. This factorises to (R - 1)(R - 8) = 0, so R = 1 or R = 8, and hence r = 1 or r = 2. However, if r = 1, then the original equation is not valid; in that case, the sequence is constant, the sum of the first 6 terms is 6a and the sum of the first 3 terms is 3a. We could only have 6a = 9 × 3a if a = 0, but that is impossible as the 7th term of S is 360. So we must have r = 2. The 7th term of S is ar6 , so 360 = 26 a = 64a, and hence a = 360 45 64 = 8 and so the answer is E.
- c UCLES Page 7

## Q6
Answer: `C`

Work:
- We could try to solve this algebraically or geometrically. An algebraic approach looks difficult, as we have two quadratic equations, and one of them has an unknown coefficient (that is, r2 ). So we use a geometric approach instead. The first circle has centre (-4, -1) and radius 8, while the second circle has centre (8, 4) and radius r. The point (8, 4) does not lie inside the first circle (it is more than 8 - (-4) = 12 units away), so the two circles will have exactly one point in common when the first circle is tangent to the second circle externally or when it lies inside the second circle and touches it internally. Here is a sketch of these two situations:
- y y
- x x
- In the first case, where r = r1 , we see that r1 + 8 is the distance between the centres of the two circles. In the second case, where r = r2 , we see that r2 - 8 is the distance between the centres. Therefore r1 + 8 = r2 - 8, so r2 - r1 = 16, and the answer is C. Note that we did not even need to work sqrt out the actual values of r1 and r2 . If we had done so, the distance between the centres is 122 + 52 = 13, so r1 = 13 - 8 = 5 and r2 = 13 + 8 = 21.
- c UCLES Page 8

## Q7
Answer: `F`

Work:
- We expand the given expression to get
- y = 4q 2 x - 2qx3 + 6q - 3x2
- Differentiating gives dy = 4q 2 - 6qx2 - 6x dx so the gradient of the curve at x = -1 is 4q 2 - 6q + 6. We can minimise this either by using calculus or by completing the square. d Using calculus, we have (4q 2 - 6q + 6) = 8q - 6, and 8q - 6 = 0 when q = 68 = 34 , so the dq answer is F. Alternatively, completing the square, we have
- 4q 2 - 6q + 6 = 4(q 2 - 32 q) + 6 = 4 (q - 43 )2 - ( 34 )2 + 6 
- so the minimum occurs when q = 34 , as before.
- c UCLES Page 9

## Q8
Answer: `E`

Work:
- A This translates the graph upwards (in the positive y-direction) by 1 unit, so the trapezia will just be 1 unit taller. The approximation will therefore still be an underestimate.
- B This stretches the graph by a factor of 2 in the y-direction, and the trapezia with it, so the approximation will still be an underestimate.
- C This translates the graph by 1 unit leftwards (in the negative x-direction), and correspondingly calculates the area between -1 and 0 rather than between 0 and 1; the trapezia are correspondingly translated leftwards by 1 unit, and so we will still get an underestimate.
- D This reflects the graph in the y-axis, and correspondingly calculates the area between -1 and 0. The trapezia are correspondingly reflected, so we will still get an underestimate.
- E The graph is reflected in the x-axis and then translated upwards by 1 unit. Whether the approximation using the trapezium rule is an overor underestimate is not affected by the vertical R 1 translation, as we noted in A, so we may as well not translate the graph at all, giving just 0 (-f(x)) dx. Let us sketch an example using just two intervals:
- y y
- x x
- The original (blue) trapezia give an underestimate for the integral. The red trapezia give an underestimate for the area of the region, but since the integral is negative (the graph lies below the x-axis), the trapezium rule gives an overestimate for the integral (for example, it may estimate -0.6 instead of the correct -0.65, and -0.6 > -0.65).
- Hence the correct answer is E.
- c UCLES Page 10

## Q9
Answer: `D`

Work:
- sqrt sqrt x x2 We can rearrange x = p y to give y = , so y = 2 (for x ≥ 0). We can then sketch the two p p curves to see what is intended:
- y
- x
- We need to find where these two curves intersect. We have sqrt x2 p x= 2 p 3 1 so x 2 = p3 , giving x 2 = p, so x = p2 and thus y = p2 as well; the point of intersection thus lies on the line y = x and the graph is symmetrical about this line. We can now find the area between the curves by integrating the difference from x = 0 to x = p2 : Z p2 sqrt x2 area = p x - 2 dx 0 p " 3 #p2 px 2 x3 = - 2 ( 32 ) 3p p.p3 p6 = - -0 ( 32 ) 3p2 = 23 p4 - 13 p4 = 13 p4
- so the answer is D.
- c UCLES Page 11

## Q10
Answer: `F`

Work:
- We do not have a rule for integrating |x|, so we will split this into two separate integrals, one from x = -1 to x = 0, where |x| = -x, and one from x = 0 to x = 3, where |x| = x. This gives Z 3 Z 0 Z 3 |x|(1 - x) dx = |x|(1 - x) dx + |x|(1 - x) dx -1 -1 0 Z 0 Z 3 = (-x)(1 - x) dx + x(1 - x) dx -1 0 Z 0 Z 3 = -x + x dx + x - x2 dx -1 0 0 3 x2 x3  2 x3  x = - + + - 2 3 -1 2 3 0 = -(- 12 - 13 ) + ( 92 - 9) = 65 - 92 = - 22 = - 11
- so the correct answer is F.
- c UCLES Page 12

## Q11
Answer: `H`

Work:
- We can write the first equation as log3 x + 2 log3 y = 1. Then writing X = log3 x and Y = log3 y, the two equations become
- X + 2Y = 1 XY = -3
- We are interested in the values of X, so we rearrange the second equation to get Y = -3/X, and substitute this into the first equation to give X- = 1. X Multiplying this by X gives the quadratic X 2 - 6 = X, or X 2 - X - 6 = 0. This factorises to (X - 3)(X + 2) = 0, so X = 3 or X = -2, so x = 3X is either 27 or 19 , and their sum is 27 91 , which is option H. We could also have solved this problem by writing Y in terms of X using the first equation, and then substituting this into the second; it would have given the same result.
- c UCLES Page 13

## Q12
Answer: `C`

Work:
- To find the value of V when t = 9, we need to integrate this expression. There is no general sqrt such as these, but we might notice that t - 1 looks somewhat rule for integrating quotients similar tosqrtthe denominator sqrt t + 1. In fact, we can use the difference of two squares to write t - 1 = ( t + 1)( t - 1), so we can rewrite the fraction to give
- dV sqrt = 24pi( t - 1) dt and this is easy to integrate; we get 24pit 2 V = 3 - 24pit + c (2) = 16pit 2 - 24pit + c
- Substituting in V = 7 and t = 1 gives
- 7 = 16pi - 24pi + c
- so c = 8pi + 7. Then at t = 9, we have V = 16pi × 9 2 - 24pi × 9 + 8pi + 7 = (16 × 27 - 24 × 9 + 8)pi + 7 = 224pi + 7
- so the answer is option C.
- Commentary: The final calculation can be simplified somewhat by writing 16 × 27 = 16 × 3 × 9 = 48 × 9, so the brackets become 24 × 9 + 8. Then 24 × 9 = 240 - 24 = 216, giving the final answer of 224pi + 7.
- c UCLES Page 14

## Q13
Answer: `B`

Work:
- We will not use calculus for this question, as the specification does not expect knowledge of differentiating exponentials or trigonometric functions. (And it also turns out that using calculus would make the solution far more complicated.) Instead, we note that this is a quadratic expression in u = 2sin x , and we can write the function as u2 - 4u + 17 4 .
- We also note that as -1 ≤ sin x ≤ 1, 12 ≤ u ≤ 2 for all real x (and u can take every value in this interval). Now we can complete the square on the quadratic to understand its behaviour; we get
- (u - 2)2 - 22 + 17 2 1 4 = (u - 2) + 4
- Thus the minimum value of the function occurs when u = 2, and for u in the interval 12 ≤ u ≤ 2, the maximum value occurs when u = 12 . In this case, we get (- 23 )2 + 14 = 10 5 4 = 2 , so the correct answer is B.
- c UCLES Page 15

## Q14
Answer: `B`

Work:
- We write S = sin 2x and C = cos 2x, so the simultaneous equations become S + 3C = -1 sqrt sqrt 3S - C= 3 Multiplying the second equation by 3 and then adding to the first equation gives
- 4S = 2 so S = 12 and hence C = - 23 . The solutions to sin 2x = 12 for 0◦ ≤ x ≤ 360◦ , or 0◦ ≤ 2x ≤ 720◦ , are given by 2x = 30◦ , 150◦ , 390◦ and 510◦ . The solutions to cos 2x = - 23 in the same range are given by 2x = 150◦ , 210◦ , 510◦ and 570◦ , so the values of 2x for which both are true are 150◦ and 510◦ . Thus the solutions for x in this range are 75◦ and 255◦ , and their sum is 330◦ . Hence the correct answer is option B.
- c UCLES Page 16

## Q15
Answer: `A`

Work:
- We look to see how we can simplify this problem. First, the powers are 9x and 3x . We can write 9x = (32 )x = 32x = (3x )2 , but it is not clear how this will help. But without a better idea, let us go with it, and write u = 3x , so the question becomes 2(u ) 1 = . 8u 4 Next, let us write everything as powers of 2, giving 2(u ) 1 3u = 2. 2 2 Therefore 2u -3u = 2-2 so we require u2 - 3u = -2. We can rearrange this quadratic to give u2 - 3u + 2 = 0, so (u - 1)(u - 2) = 0 giving u = 1 or u = 2. Thus 3x = 1 or 3x = 2, giving two possibilities: x = 0 or x = log3 2. The question explicitly says “find the real non-zero solution”, so the correct answer is option A.
- c UCLES Page 17

## Q16
Answer: `C`

Work:
- R1 Let A = 0 f(x) dx, which is the (signed) area under the graph of y = f(x) between x = 0 and x = 1 (taking signs into account, as Rusual: parts of the graph under the x-axis are counted as negative areas). Likewise, let B = 1 f(x) dx, which is the (signed) area between x = 1 and x = 2. R1 The integral 0 f(x + 1) dx gives the (signed) area under the graph of y = f(x + 1) between x = 0 and x = 1. This graph is the graph of y = f(x) translated left by 1 unit, so this equals the area under the original graph between x = 1 and x = 2, which is B. Hence B = 6. The first equation gives 2A + 5B = 14, and as B = 6, we get A = -8. R2 The final integral 0 f(x) dx is the (signed) area between x = 0 and x = 2, which is A + B = -8 + 6 = -2. Hence the answer is C.
- c UCLES Page 18

## Q17
Answer: `C`

Work:
- A product of two terms is at least 0 if both factors are positive or both terms are negative. So we look at the signs of the two factors. We start by finding the values of θ for which they are zero. We have sin 2θ = 21 when 2θ = pi6 or 5pi pi 5pi 6 , so for θ = 12 or 12 . Thinking about a sketch of the graph of y = sin 2θ, we see that sin 2θ - 2 is positive for θ between these values and negative elsewhere. For the second factor, we have sin θ = cos θ when tan θ = 1, so θ = pi4 . Thinking about the graphs of y = sin θ and y = cos θ, we see that sin θ - cos θ is negative for θ < pi4 and positive for θ > pi4 . For consistency, we write pi4 = 3pi 12 in what follows. We thus have the following table:
- pi pi pi 3pi 0 ≤ θ < 12 θ = 12 12 < θ < 12 θ = 3pi 3pi 5pi 12 < θ < 12 θ = 5pi 5pi 12 < θ ≤ pi sin 2θ - 12 - 0 + + + 0 - sin θ - cos θ - - - 0 + + + product + 0 - 0 + 0 -
- The lengths of the subintervals where the product is positive (or zero) is pi ( 12 - 0) + ( 5pi 3pi 3pi pi 12 - 12 ) = 12 = 4
- The whole interval has length pi, so the fraction of the interval for which the inequality is satisfied is 41 , and the answer is option C.
- c UCLES Page 19

## Q18
Answer: `B`

Work:
- From the given options, it is clear that the curve and line do not intersect. One way to do this would be to take a point on the curve, say (a, a2 + 4), and a point on the line, say (b, 2b - 2), find the (square of) the distance between them, and then try to find some way of minimising it. That, though, seems quite challenging, as there are two independent variables involved. Another way is to draw a sketch of the situation and to think about what the question means geometrically.
- y
- x
- The shortest distance from any point on the curve to the straight line is found by drawing a perpendicular from the curve to the straight line, like this:
- y
- x
- This may give us a few different ideas; any of the following would work:
- We can use this to find the distance of any point (a, a2 + 4) to the line; we then find the smallest possible such distance.
- c UCLES Page 20
- The smallest distance will be when the perpendicular to the line is also perpendicular to the curve; in the above sketch, it is clear that if we move the joining line closer to the origin, its length will become shorter. We can find this position by finding the gradient of the normal to the curve and finding a point at which this is perpendicular to the line.
- Taking this one step further, if we translate the line (without changing its gradient), we shorten the minimum distance of the curve from the line, but as long as we don’t cross the curve, the point which is closest to the line will remain so. Therefore the closest point to the line is the point on the curve where the curve’s gradient equals the line’s gradient, for when the line just touches the curve, this point will be at zero distance from the curve.
- We will use the final approach to solve this problem. dy dy The gradient of the line is 2, and the curve has gradient dx = 2x, so dx = 2 when x = 1, so (1, 5) is the closest point on the curve to the line. The line through (1, 5) perpendicular to the line y = 2x - 2 has equation y - 5 = - 12 (x - 1). This intersects the line y = 2x - 2 when
- (2x - 2) - 5 = - 12 (x - 1)
- so 2x - 7 = - 21 (x - 1). Multiplying this by 2 gives
- 4x - 14 = -x + 1
- so 5x = 15, giving x = 3, y = 4. p sqrt The distance between (1, 5) and (3, 4) is (3 - 1)2 + (4 - 5)2 = 5, so the correct answer is B.
- Commentary: Though we dismissed the original two-variable idea, it turns out that we could have used it in a similar way to the first idea listed above: if we fix a value for a, we can find the value of b which gives the smallest distance from that point to the line. This gives us a formula for the smallest distance from a given point to the line in terms of a; we can then find the value of a which makes this as small as possible. This changes the problem from one two-variable problem to two one-variable problems, which we know how to solve.
- c UCLES Page 21

## Q19
Answer: `C`

Work:
- We start by writing out the first few terms of the summation, and writing each of them in terms of sin 10◦ or sin 100◦ :
- k=0: sin 10◦ k=1: sin 100◦ k=2: sin 190◦ = - sin 10◦ k=3: sin 280◦ = - sin 100◦ k=4: sin 370◦ = sin 10◦ k=5: sin 460◦ = sin 100◦ k=6: sin 550◦ = - sin 10◦ k=7: sin 640◦ = - sin 100◦
- and we see that we repeat every four terms. The first four terms sum to zero, as do the next four, and so on. In total, there are 91 terms, and 91 = 22 × 4 + 3, so the only terms which contribute to the final sum are the last three. Therefore the whole sum is that from k = 88, k = 89 and k = 90, giving
- sin 10◦ + sin 100◦ + (- sin 10◦ ) = sin 100◦ .
- Hence the answer is C.
- c UCLES Page 22

## Q20
Answer: `E`

Work:
- Finding the values of x at which the two curves intersect is the same as finding the values of x at which the y-values are equal, that is, x3 - 12x = k - (x - 2)2 or x3 - 12x - k + (x - 2)2 = 0.
- Thus we are finding out something about the roots of a cubic. We can expand the brackets in the final equation to give x3 + x2 - 16x - k + 4 = 0, and we write f(x) = x3 + x2 - 16x - k + 4. We can determine something about the locations of the roots of f(x) by finding the stationary points. We have f 0 (x) = 3x2 + 2x - 16, so f 0 (x) = 0 when sqrt sqrt -2 ± 22 + 4 × 3 × 16 -2 ± 196 -2 ± 14 8 x= = = = 2 or - . 6 6 6 3 (We could have found these roots by factorising, but that did not look particularly easy.) Therefore there are stationary points at x = 2 and x = - 83 . We have f(2) = -16 - k, but calculating f(- 38 ) by hand would be painful, so let us try to avoid doing so if we can! We note that f(0) = 4 - k, and that f(x) gets big as x gets big, so if there are exactly two roots with positive x-coordinates, we need the graph to look something like this:
- y
- (0, 4 - k)
- x
- (2, -16 - k)
- In particular, we require f(0) > 0, so we must have k < 4. It must also be the case that the stationary point at x = 2 lies below the x-axis, so we need -16 - k < 0, that is, -16 < k. Once we have met these two conditions, it becomes clear that there are three distinct roots, exactly one of which has x < 0. Therefore, the complete range of values of k is given by -16 < k < 4, which is option E.
- c UCLES Page 23

## Answer Summary

`1A 3E 4C 5E 6C 7F 8E 9D 10F 11H 12C 13B 14B 15A 16C 17C 18B 19C 20E`
