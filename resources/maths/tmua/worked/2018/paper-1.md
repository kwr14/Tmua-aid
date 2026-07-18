# TMUA 2018 Paper 1 Worked Notes

Sources:
- Paper PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f710f_TMUA%202018%20Paper%201.pdf>
- Official worked solutions PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7110_TMUA%202018%20Paper%201%20Official%20Solutions.pdf>
- Answer key PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f7111_TMUA%202018%20Answer%20Key.pdf>

## Notes
- These notes are generated from the official worked solutions and cleaned into markdown.
- Each section keeps the official answer option and a cleaned version of the official reasoning.

## Q1
Answer: `D`

Work:
- We write the integrand (the thing being integrated) in terms of powers of x and split up the fraction in order to be able to compute the integral: Z 4 Z 4 3 - 2x 3 - 2x sqrt dx = 3 dx 1 x x 1 x2 Z 4 3 1 = 3x2 - 2x2 dx " 1 1 #4 3x2 2x 2 = - 1 (- 12 ) 2 1 1 1 4 -2  = -6x - 4x 1 2
- = (-6 × 12 - 4 × 2) - (-6 × 1 - 4 × 1) = -11 - (-10) = -1
- so the correct answer is D.

## Q2
Answer: `C`

Work:
- One approach is to use the formulae for the sum of the first 5 and the first 8 terms (that is, Sn = 12 n(2a + (n - 1)d)). We have
- S5 = 12 × 5(2a + 4d) = 52 (2a + 4d) S8 = 12 × 8(2a + 7d) = 4(2a + 7d)
- These are equal, so we have 2 (2a + 4d) = 4(2a + 7d)
- We want to rearrange this to get a formula in the form a = · · · , so we multiply both sides by 2, expand the brackets and collect like terms:
- 5(2a + 4d) = 8(2a + 7d) ⇐⇒ 10a + 20d = 16a + 56d ⇐⇒ -6a = 36d ⇐⇒ a = -6d
- so the answer is C. An alternative approach is to note that the difference between the sum of the first 5 and the sum of the first 8 terms equals the sum of the 6th, 7th and 8th terms. (This is because S5 = u1 + u2 + · · · + u5 while S8 = u1 + u2 + · · · + u5 + u6 + u7 + u8 , where we have written the sequence as u1 , u2 , . . . .) Since the two sums S5 and S8 are equal, the sum of the 6th, 7th and 8th terms must be zero. This gives
- (a + 5d) + (a + 6d) + (a + 7d) = 0
- Expanding and collecting like terms gives 3a + 18d = 0, so a = -6d, as before.

## Q3
Answer: `E`

Work:
- sqrt sqrt The first circle has centre (-2, 3) and radius 18 = 3 2 The second circle has centre (7, -6) and radius 2 It would help to draw a quick sketch of the situation.
- y
- (-2, 3)
- x
- (7, -6)
- It seems clear from the sketch that to find the shortest distance between the circles, we should draw a line between their centres and find the length of the segment which lies outside both of them:
- y
- (-2, 3)
- x
- (7, -6)
- The distance between the centres is p sqrt sqrt ((-2) - 7)2 + (3 - (-6))2 = 81 + 81 = 9 2 sqrt sqrt and if we subtract the two sqrt radii sqrt (3 2 sqrt and sqrt2) for the parts of the line which lie within the circles, we are left with 9 2 - 3 2 - 2 = 5 2. The correct answer is E. This can also be proved by taking an arbitrary point on each of the circles, finding the distance between them and then minimising this, but that is far more complicated than needed.

## Q4
Answer: `G`

Work:
- We can solve the equations to find x by substituting for y. The second equation gives y = a - x, so the first equation becomes
- 3x2 + 2x(a - x) = 4
- This rearranges to x2 + 2ax - 4 = 0 and the discriminant of this equation is
- (2a)2 - 4 × 1 × (-4) = 4a2 + 16
- This is always positive, as 4a2 ⩾ 0 for all real values of a, so there are always two distinct real roots, and the correct answer is G.

## Q5
Answer: `D`

Work:
- For this question, we make use of the remainder theorem: the remainder when f(x) is divided by (x - a) is f(a). In this case, we take a = -2 and a = -3, so
- f(-2) = R f(-3) = S
- Substituting these into the given formula for f(x) gives
- f(-2) = -8 + 4a - 2b + c = R f(-3) = -27 + 9a - 3b + c = S
- We want the largest possible value of R - S, so we subtract these two equations to get
- 19 - 5a + b = R - S
- To get the largest possible value, we want a to be as small as possible and b to be as large as possible, so we take a = 1, b = 3 (and then c = 2), giving R - S = 19 - 5 + 3 = 17 Thus the correct answer is D.

## Q6
Answer: `E`

Work:
- This equation has trigonometric functions and an x on its own. Our best bet is to first rearrange it to bring all of the trigonometric functions together. We have a sin 2x on one side and a cos 2x on the other, which suggests that we should divide by cos 2x to obtain tan 2x. This gives
- x tan 2x = 1
- We should check, though, that we cannot have cos 2x = 0, so that we are allowed to divide by it. If cos 2x = 0, this would require x sin 2x = 0, so either sin 2x = 0, which is impossible if cos 2x = 0, or x = 0. But if x = 0, then cos 2x = 1, so this is also impossible. So we cannot have cos 2x = 0. Returning to x tan 2x = 1, we can divide by x to get tan 2x = x This equation is not possible to solve exactly. But the question (thankfully) only asks us how many solutions there are in the range 0 ⩽ x ⩽ 2pi So we can sketch the graphs of y = tan 2x and y = x1 and see how many times they intersect.
- y
- x 0 pi pi 3pi 2pi 2 2 -1
- -2
- We see that the graph of y = x1 intersects every positive branch of y = tan 2x once. Since there are four branches of y = tan 2x in the range 0 ⩽ x ⩽ 2pi, there are four solutions, so the correct answer is E.

## Q7
Answer: `A`

Work:
- We can expand these two expressions using the binomial theorem. We look just at the term involving x6 :   7 4 (1 + kx2 )7 = · · · + 1 (kx2 )3 + · · · 7×6×5 3 6 = ··· + k x + ··· 3×2×1 = · · · + 35k 3 x6 + · · ·
- and   10 10 4 6 (k + x) = ··· + k x + ···   10 4 6 = ··· + k x + ··· 10 × 9 × 8 × 7 4 6 = ··· + k x + ··· 4×3×2×1 = · · · + 210k 4 x6 + · · ·
- We therefore need 35k 3 = 210k 4 35 5 1 so k = = = . 210 30 6 Thus the correct answer is A.

## Q8
Answer: `D`

Work:
- Let us write the terms of the GP (geometric progression) as a, ar, ar2 and so on. Then we are told that a Sinfinity = a + ar + ar2 + · · · = =6 (1) 1-r We can rearrange this final equation to a = 6 - 6r if we wish to. The squares of each term are a2 , a2 r2 , a2 r4 , a2 r6 and so on. These themselves form a GP with first term a2 and common ratio r2 . Therefore, given that their sum is 12, we have for this GP
- a2 Sinfinity = a2 + a2 r2 + a2 r4 + · · · = = 12 1 - r2
- a2 We can write this last equation as = 12 (1 + r)(1 - r) But we can now substitute in equation (1) to give   a 6 = 12 1+r a so that = 2, or a = 2 + 2r 1+r Thus we have simultaneous equations for a and r:
- a = 6 - 6r a = 2 + 2r
- Subtracting these gives 4 - 8r = 0, so r = 21 and a = 3 We can now work out the sum to infinity of the cubes: the sequence of terms becomes a3 , a3 r3 , a3 r6 and so on, which as before is a GP; this time the first term is a3 and the common ratio is r3 . Hence the sum to infinity is
- a3 33 27 216 Sinfinity = 3 = 1 = 7 = 1-r 1 - ( 2 )3 (8) 7
- and the correct answer is D.

## Q9
Answer: `B`

Work:
- Commentary: We want the cubic equation 2x3 -3x2 -12x+c = 0 to have three distinct real solutions. We don’t know any techniques for finding the roots of a cubic equation, so we will have to be creative. (Actually, there is a formula, often known as Cardano’s formula, for solving a cubic equation, but you are not expected to know this.) What we do know how to do is to sketch a cubic graph by finding its turning points and y-axis intercept, even if we don’t know the x-axis intercepts, so we will do this.
- We can find the stationary points on the graph of y = 2x3 - 3x2 - 12x + c by differentiating. We have dy = 6x2 - 6x - 12 = 6(x2 - x - 2) = 6(x - 2)(x + 1) dx dy so there are stationary points at x = 2 and x = -1 (where dx = 0) These have coordinates (-1, 7 + c) and (2, -20 + c) For the equation 2x3 - 3x2 - 12x + c = 0 to have three distinct real solutions, we need the two turning points of the cubic to be on opposite sides of the x-axis, one above it and one below it. It is clear that -20 + c < 7 + c, so we need -20 + c < 0 and 7 + c > 0. The first inequality becomes c < 20 and the second c > -7. Combining these, there are three distinct real solutions if and only if -7 < c < 20, which is option B.

## Q10
Answer: `E`

Work:
- We notice that the first inequality involves x only and the second involves y only, so we can solve each inequality separately. For the first one, |2 - x| ⩽ 6, this means that x is at distance at most 6 from 2, so -4 ⩽ x ⩽ 8 Likewise, the second inequality, |y + 2| ⩽ 4 means that y is at most 4 from -2 (as |y + 2| = |y - (-2)|, so it measures the distance of y from -2). So -6 ⩽ y ⩽ 2 We can now obtain the greatest possible value of |xy| = |x|.|y| by taking the greatest possible value of |x|, which is 8, and the greatest possible value of |y|, which is 6, so the greatest possible value of |xy| is 8 × 6 = 48, which is option E.

## Q11
Answer: `C`

Work:
- We can find the equation of the normal to the curve y = 10 - x2 at the point (p, q) as usual. dy The derivative is = -2x so at x = p the tangent has gradient -2p. Therefore the normal dx has gradient . 2p The tangent and normal both pass through the point (p, 10 - p2 ), which shows that q = 10 - p2 . The normal thus has equation y - (10 - p2 ) = (x - p) 2p so rearranging into the form y = mx + c gives 1 1 y= x - + 10 - p2 2p 2 We want this to have the form y = mx + 5 where m > 0, so we have - + 10 - p2 = 5. Rearranging thus gives p2 = 3 3 2 and hence p = ± sqrt = ± 2 2 1 3 2 Since m = > 0 we must have p > 0 so p = 2p 2 The correct answer is C.

## Q12
Work:
- This curve intercepts the x-axis at 0, p, q and r. As the leading power of x is -x4 , the curve tends to -infinity as x gets very large (both positive and negative), and so the curve looks something like this:
- y
- A C x 0 p q r B
- We have labelled the three areas as A, B and C, and we want to know the value of A + B + C. We can then write the three integrals we have been given in terms of these, referring to the sketch: Z r f(x) dx = A - B + C = 0 (1) Z q f(x) dx = A - B = -2 (2) Z0 r f(x) dx = -B + C = -3 (3) p
- Subtracting (3) from (1) gives A = 3, from which (2) gives B = 5 and so C = 2. Therefore A + B + C = 10, hence the correct option is F.
- Commentary: Although our sketch turns out to be not very accurate, it was sufficient to help us understand what was going on and to solve the problem. This is what we seek from sketches: they should be good enough to give us insight, but they do not need to be perfect. Incidentally, there do exist values of p, q and r which make the statements of this question true, namely p = 1.25, q = 3.16 and r = 4.25, correct to two decimal places.

## Q13
Work:
- A local minimum of f(x) occurs where the gradient is 0 at the point, is negative immediately to the left of the point and is positive immediately to its right. So on the graph of f 0 (x), this will be at a point where f 0 (x) = 0, and f 0 (x) is increasing from negative to positive at that point. The only such point on the graph given is C.
- The behaviour of f(x) at all of the labelled points is as follows:
- A Changing from positive to negative gradient, so a local maximum.
- B A local minimum of the gradient, so a non-stationary point of inflection. If walking along the curve, one would stop turning to the right and start turning to the left.
- C Changing from negative to positive gradient, so a local minimum.
- D This point, where x = 0, has no particular relevance to the shape of f(x).
- E A local maximum of the gradient, so a non-stationary point of inflection. If walking along the curve, one would stop turning to the left and start turning to the right.
- F A local minimum of the gradient at a point of zero gradient, so a stationary point of inflection. If walking along the curve, one would stop turning to the right and start turning to the left.

## Q14
Answer: `B`

Work:
- There are a variety of different ways to approach this question. The following is probably the simplest. We can substitute the coordinates of the points into the equation of the line to obtain
- log2 p = 3m + 4 4 = m log2 p + 4
- The second equation gives m log2 p = 0, so either m = 0 or log2 p = 0, so either m = 0 or p = 1. If m = 0, then the first equation gives log2 p = 4, so p = 16 If log2 p = 0, so p = 1, then the first equation gives 3m + 4 = 0, which has a solution. So there are two possible values of p, namely 1 and 16. Hence the answer is B.
- Commentary: You might find it helpful to write q (for example) in place of log2 p, so that the equations become
- q = 3m + 4 4 = mq + 4
- This makes their structure much more obvious.

## Q15
Answer: `E`

Work:
- sqrt 2 We note that 3 = 3 . sqrt x So if we write y = 3 , the equation becomes sqrt 4 y2 - 3 y + 20 = 0
- or y 2 - 9y + 20 = 0 This factorises to give (y - 4)(y - 5) = 0 so either y = 4 or y = 5 1 x 1 1 1 We can write y = 3 2 = 3 2 x so either 3 2 x = 4 or 3 2 x = 5 We can now take logs to base 3 to obtain 1 1 2 x = log3 4 or 2 x = log3 5
- so x = 2 log3 4 or x = 2 log3 5
- The question has asked for the sum of the real solutions of the equation. Both of these are real, so we can add them to get 2 log3 4 + 2 log3 5 = 2 log3 20 using the log rule log ab = log a + log b Hence the answer is E.

## Q16
Answer: `F`

Work:
- We first need to find the stationary point of the curve C. We can do this either by differentiating or, as the equation is a quadratic, by completing the square. By differentiating, we have dy = 2x + b dx dy so = 0 if and only if x = - 12 b, and so dx y = (- 21 b)2 + b(- 21 b) + 2 = 2 - 14 b2
- Alternatively, we can complete the square to give y = (x + 21 b)2 - 14 b2 + 2, and so the stationary point is at (- 12 b, 2 - 14 b2 ). The distance of this point from the origin is then given by q q q (- 21 b)2 + (2 - 14 b2 )2 = 14 b2 + 4 - 4( 14 b2 ) + 16 1 4 1 4 b = 16 b - 34 b2 + 4
- To minimise this square root, we can minimise the expression inside the square root. This is a function of B = b2 , namely 16 B 2 - 34 B + 4, so we can minimise this.
- Commentary: If a quartic is actually a quadratic in the variable squared, it is usually much easier to work with the quadratic than the quartic.
- We can minimise this by completing the square or differentiating, as before. We can start by 1 1 taking out a factor of 16 so we are trying to minimise 16 (B 2 - 12B) + 4. (There’s no need to think about the 4 at the end: this additional term does not change the value of b or B at which the function is minimised.) We therefore wishsqrtto minimise B 2 - 12B = (B - 6)2 - 36 so B = 6 gives the minimum value, so b2 = 6 giving b = 6 (as b ⩾ 0), hence the answer is F.
- Commentary: We could have gone ahead and differentiated the whole square root expression for distance, if we know the chain rule. But that’s more effort than needed. Similarly, we could have differentiated the expression as a quartic, but again that is more complex than required. It is almost always worth spending a moment thinking how to make the problem a little easier before diving into algebra and calculations.

## Q17
Answer: `A`

Work:
- It is not obvious how to begin this question - there are lots of wordy descriptions. We also don’t know how many pieces of data there are in each of the two sets. So let’s try naming things. Let the first set of data have n pieces of data, and the second set have m pieces of data. Since the mean of the first set of data is 15, the sum of the data is 15n. Likewise, the sum of the second set of data is 20m. When we exchange one piece of data from the first set with one piece of data from the second set, the overall total stays the same, but the totals of the two sets change. We are told what happens to the means, so the total of the first set is now 16n and of the second set is 17m. Since the overall total is the same, we have
- 15n + 20m = 16n + 17m
- We can simplify this to give n = 3m Therefore the overall total is 15n + 20m = 45m + 20m = 65m and there are n + m = 4m pieces of data. 65m 65 Thus the mean of the combined set of data is = = 16 14 and the answer is A. 4m 4
- Commentary: At the end of this, we are still no wiser about how many pieces of data there were to begin with. All we know is that the first set contains three times as many as the second set.

## Q18
Answer: `B`

Work:
- The lines of symmetry of a sine or cosine graph (that is, something of the form sin(kx + θ) + c or cos(kx + θ) + c) are at the x-values where the sine or cosine equals ±1. So in this case, if we solve sin(2x - 4pi 3 ) = ±1 we will find the lines of symmetry. We solve each of them separately. We have sin θ = 1 when θ = pi2 + 2npi (for any integer n), so in this case, this gives
- 2x - 4pi pi 3 = 2 + 2npi ⇐⇒ 2x = 11pi 6 + 2npi ⇐⇒ x = 11pi 12 + npi
- So the smallest positive value of x with sin(2x - 4pi 11pi 3 ) = 1 is x = 12 In the second case, we have sin θ = -1 when θ = - pi2 + 2npi (for any integer n), so in this case, this gives
- 2x - 4pi pi 3 = - 2 + 2npi ⇐⇒ 2x = 5pi 6 + 2npi ⇐⇒ x = 5pi 12 + npi
- So the smallest positive value of x with sin(2x - 4pi 5pi 3 ) = -1 is x = 12 This is smaller than 11pi 5pi 12 so the answer is 12 , which is option B.

## Q19
Work:
- This questions calls for a sketch. We draw AB = 10, a line from A at an angle θ to AB (though we do not know what θ is), and a circular arc centred on B with radius 7.
- C2
- C1
- θ 7 A 10 B
- The sketch shows the two triangles which could be formed subject to these conditions, with the third vertex being at C1 or C2 . One approach, hinted at by the instruction to find cos θ, is to use the cosine rule. In the triangle ABC1 , we have
- 72 = (AC1 )2 + 102 - 2(AC1 )10 cos θ (1)
- while in the triangle ABC2 , we have
- 72 = (AC2 )2 + 102 - 2(AC2 )10 cos θ (2)
- Unfortunately, we do not know either AC1 or AC2 . We do, however, know that the larger triangle has three times the area of the smaller one. Taking AC1 or AC2 as the base of the triangle, the perpendicular height is from B to the line AC2 , and is the same for both triangles. So AC2 = 3(AC1 ) We can now substitute this into equation (2) to get
- 72 = 9(AC1 )2 + 102 - 6(AC1 )10 cos θ
- Subtracting equation (1) then gives
- 0 = 8(AC1 )2 - 40(AC1 ) cos θ
- so dividing by 8AC1 , we have AC1 = 5 cos θ. We can now substitute this back into equation (1) to get
- 72 = (5 cos θ)2 + 102 - 20(5 cos θ) cos θ
- so 49 = 25 cos2 θ + 100 - 100 cos2 θ
- which simplifies to 75 cos2 θ = 51 51 17 17 so cos2 θ = = giving cos θ = (as cos θ > 0) 75 25 5
- There is an alternative approach which does not use the cosine rule. If we drop a perpendicular from B to the line AC2 , and let x = AC1 , our diagram becomes:
- C2
- D
- C1 x θ 7 A 10 B
- Now D is midway between C1 and C2 by symmetry (or by using the “RHS” congruency rule on the triangles BDC1 and BDC2 ), so C1 D = DC2 . Also, the area of the triangle ABC1 is 21 (AC1 )(BD) and the area of the triangle ABC2 is
- 2 (AC2 )(BD) Since the larger triangle has three times the area of the smaller one, AC2 = 3(AC1 ) (as before). So AC2 = 3x, hence C1 C2 = 2x, and C1 D = DC2 = x We can now apply Pythagoras to BDC1 and BDA. We obtain, respectively,
- x2 + (BD)2 = 72 (2x)2 + (BD)2 = 102
- Subtracting gives 3x2 = 51, so x2 = 17 AD 2x 17 Since cos θ = = we get cos θ = as before. AB 10 5 sqrt sqrt This also easily sqrt shows sqrtthat BD = 32 = 4 2 and that the area of the two triangles ABC1 and ABC2 are 2 34 and 6 34.

## Q20
Answer: `E`

Work:
- This reminds us of adding the terms of an arithmetic series. One way to do so is to write out the series twice, once forwards and once backwards, and then add corresponding pairs of terms together. If we do that here, we obtain
- S = sin2 0◦ + sin2 1◦ + sin2 2◦ + · · · + sin2 88◦ + sin2 89◦ + sin2 90◦ S = sin2 90◦ + sin2 89◦ + sin2 88◦ + · · · + sin2 2◦ + sin2 1◦ + sin2 0◦
- so that 2S = (sin2 0◦ + sin2 90◦ ) + (sin2 1◦ + sin2 89◦ ) + · · · + (sin2 90◦ + sin2 0◦ ) Now we know that sin2 x + cos2 x = 1 for all x, and since sin(90◦ - x) = cos x (by, for example, thinking about a right-angled triangle or by looking at the graphs of the functions), we can rewrite this sum as
- 2S = (sin2 0◦ + cos2 0◦ ) + (sin2 1◦ + cos2 1◦ ) + · · · + (sin2 90◦ + cos2 90◦ ) = 1 + 1 + ··· + 1 = 91
- (since there are 91 terms), therefore S = 45.5, which is option E.
- We are Cambridge Assessment Admissions Testing, part of the University of Cambridge. Our research-based tests provide a fair measure of skills and aptitude to help you make informed decisions. As a trusted partner, we work closely with universities, governments and employers to enhance their selection processes.
- Cambridge Assessment Admissions Testing The Triangle Building Shaftesbury Road Cambridge CB2 8EA United Kingdom
- Admissions tests support: admissionstesting.org/help

## Answer Summary

`1D 2C 3E 4G 5D 6E 7A 8D 9B 10E 11C 14B 15E 16F 17A 18B 20E`
