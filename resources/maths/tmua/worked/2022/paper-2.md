# TMUA 2022 Paper 2 Worked Notes

Sources:
- Paper PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/64d0dd18439e1261390a8585_TMUA%202022%20Paper%202.pdf>
- Official worked solutions PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/668c69e059ad6c6c11a7507d_TMUA%202022%20Paper%202%20Worked%20Solutions.pdf>
- Answer key PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/64d0dd0d811862e572dd9e87_TMUA%202022%20Answer%20Keys.pdf>

## Notes
- These notes are generated from the official worked solutions and cleaned into markdown.
- Each section keeps the official answer option and a cleaned version of the official reasoning.

## Q1
Answer: `B`

Work:
- We differentiate to obtain dy = 12x3 + 12x2 + 12x. dx dy We solve the equation dx = 0 to find the number of stationary points:
- 12x3 + 12x2 + 12x = 0 if and only if 12x(x2 + x + 1) = 0.
- So either x = 0 or x2 + x + 1 = 0. But this quadratic has discriminant 12 - 4 × 1 = -3 < 0, so it has no real solutions. Thus there is only one stationary point, at x = 0, and the answer is option B.

## Q2
Answer: `E`

Work:
- We expand the brackets in the first term using the binomial theorem and write out the sum in full to get (1 + 5x + 10x2 + 10x3 + 5x4 + x5 ) × (1 + x + x2 + x3 + x4 + x5 ). The x5 term in the product is obtained by taking all possible pairs of a term in the first bracket and a term in the second whose product is cx5 for some number c, and then adding these together. Therefore the x5 term in the product is
- 1 · x5 + 5x · x4 + 10x2 · x3 + 10x3 · x2 + 5x4 · x + x5 · 1 = (1 + 5 + 10 + 10 + 5 + 1)x5 = 32x5 .
- Therefore the correct answer is option E.

## Q3
Answer: `C`

Work:
- I n = 2 is prime and n2 + 2 = 6 is not prime, so this case satisfies the statement and is not a counterexample.
- II n = 3 is prime but n2 + 2 = 11 is prime, so this is a counterexample as it does not satisfy the statement.
- III n = 4 is not prime, so it satisfies the statement and is not a counterexample.
- Therefore only II provides a counterexample, which is option C.

## Q4
Answer: `B`

Work:
- We can rewrite the equation of circle by completing the square to find its centre. We get:
- (x + f )2 - f 2 + (y + g)2 - g 2 + h = 0
- which we can rearrange as
- (x + f )2 + (y + g)2 = f 2 + g 2 - h. p Therefore the centre is at (-f, -g) (and the radius is f 2 + g 2 - h, but that is not relevant to us here). Then the distance between the centre of the circle and the point P is given by
- L2 = (p + f )2 + (q + g)2
- so we need the values of f , g, p and q. Hence the correct answer is option B.

## Q5
Answer: `F`

Work:
- I Let us sketch a line through (1, 2) with a negative y-intercept:
- y
- x
- It is clear from this sketch that if the line has a negative y-intercept, it must have a positive x-intercept. (A more formal proof goes as follows: since y < 0 when x = 0 and y > 0 when x = 1, there must be some value of x with 0 < x < 1 where y = 0. Therefore the x-intercept must lie between 0 and 1.)
- II The converse of P reads: If the x-intercept of L is positive, then the y-intercept of L is negative. This is the case if the x-intercept is between 0 and 1, as in the previous sketch, but if the x-intercept is greater than 1, this is no longer true:
- y
- x
- So the converse of P is false.
- III The contrapositive of P has the same truth value as P itself, so the contrapositive of P is true.
- Therefore only I and III are true, and the correct answer is option F.

## Q6
Answer: `C`

Work:
- Suppose P is true. Since there are an odd number of integers in the list, there is a unique middle one (when they are written in increasing order), so this is the median. Therefore Q is true, and P is sufficient for Q. Now suppose that Q is true. It does not follow that n is odd; here is a counterexample: if the list is 2, 2, then n = 2 and the median is 2, so Q is true, but P is false. (In general, any list with n even and the middle pair of numbers equal is a counterexample.) Therefore P is not necessary for Q. The correct answer is option C.

## Q7
Answer: `F`

Work:
- Searching for small counterexamples to the claim does not find any; the first few differences are all prime. So we do have to check the proof in detail, as it might be correct. The algebraic expansion on line I is correct. The expression in line II is also correct, using the expansion from line I. For line III, if we could write 3x2 + 3x + 1 = (ax + b)(cx + d) with real coefficients a, b, c and d, then we would have real roots of the equation 3x3 + 3x + 1 = 0, namely x = - ab and x = - dc . But the discriminant is 32 - 4 × 3 × 1 = -3 < 0, so this is impossible. So this statement is true. Line IV is more tricky: just because the algebraic expression is not factorisable into algebraic factors does not mean that the integer it represents for any particular value of x is not factorisable in integers. As a simpler example, the algebraic expression x2 + 1 is not factorisable into real algebraic factors, yet substituting integers for x shows that the integer value can sometimes be factorised: taking x = 3 gives 32 + 1 = 10 = 2 × 5, for example. So this line of the argument is not valid. Line V does follow from lines II and IV. Therefore the proof is wrong, and the first (and only) error occurs on line IV (option F).
- It is worth noting that the ‘opposite’ argument does work: if an algebraic expression does factorise as (ax + b)(cx + d) with a, b, c and d integers, then the value of original expression always factorises (as an integer) when x is an integer, just by substituting the value of x into the factorised form. (It is possible, though, that one of the factors is 1, so the integer may be prime for some value(s) of x.) It also turns out that in this case, if we search far enough, we do find a counterexample to the claim: 63 - 53 = 216 - 125 = 91 = 7 × 13. (It might have been the case that the claim was true even though the attempted proof had an error.)

## Q8
Answer: `C`

Work:
- We first determine the number of terms in the whole sequence: there are 70-1 3 + 1 = 23 + 1 = 24 terms. We next determine the number of pairs that sum to 74. The pairs are:
- 4 + 70 7 + 67 34 + 40 [37 + 37]
- The final pair is excluded because the two terms have to be distinct to fit the rule in (∗). The number of valid pairs is therefore 34-4 3 + 1 = 10 + 1 = 11. If a selection S does not satisfy the rule in (∗), then it can have at most one term from each of these pairs, so it has to leave out at least 11 terms. So it can have at most 24 - 11 = 13 terms. Therefore if S has at least 14 terms, it must satisfy (∗). We also need to show that if S only has 13 terms, it might not satisfy (∗). We can include 1, 37 and one term from each listed pair, giving 2 + 11 = 13 terms. These 13 terms do not contain a distinct pair summing to 37. Hence the smallest value of n which forces (∗) to be true is 14, and the correct answer is option C..

## Q9
Work:
- The statement (∗) does not restrict us to positive real numbers x, so whatever the value of k, we can always find a large negative number x with x < k and x2 ≥ k. We can even be explicit about this (though that is not required to answer this question): sqrt if k ≤ 0, we can take x = k - 1 in which case x2 > 0 ≥ k, and if k > 0, we can take x = - k so x < 0 < k and x2 = k ≥ k. Therefore (∗) is true for no real values of k, and the correct option is A.

## Q10
Work:
- I We can find a counterexample to this statement: taking x = 2 and n = 1 shows that this statement is false.
- II This is true; if x ≤ 0, we can take n = 1, and if x > 0, we can take n to be the smallest integer greater than x.
- III This is true; we can take x = 0. (If, though, we replaced ‘positive integers’ with ‘integers’, the resulting statement would be false.)
- Therefore II and III are true, and the correct option is G.

## Q11
Answer: `C`

Work:
- The angle SP Q is a right angle if and only if the triangle SP Q satisfies Pythagoras’s theorem, that is, if and only if SP 2 + P Q2 = SQ2 . Since P QRS is a kite, its diagonals intersect at right angles, so both SOP and P OQ are rightangled triangles. Therefore, again by Pythagoras,
- SP 2 = x2 + z 2 P Q2 = x2 + y 2 .
- Substituting this, along with SQ = y + z, into the above equation gives the following necessary and sufficient condition for angle SP Q to be a right angle:
- x2 + z 2 + x2 + y 2 = (y + z)2 .
- Expanding and simplifying, this is equivalent to
- 2x2 = 2yz
- or x2 = yz. Therefore option C gives a necessary and sufficient condition. (One should also check that none of the others are necessary and sufficient; we could take x = 2, y = 4, z = 1: this satisfies option C but none of the others.)

## Q12
Work:
- We do not know how to integrate any of these, so we will instead compare the integrands as the integrals are all from 0 to 1. sqrt x We have 2 = 2x/2 , which makes R look a little simpler. Since x/2 < x for 0 < x < 1, 2x/2 < 2x in this interval, and so R < Q. sqrt sqrt Now in this interval, we also have x < x (as x2 < x), so 2x < 2 x , hence Q < P . Combining these, we find that R < Q < P , so the correct option is F.

## Q13
Answer: `E`

Work:
- For each fixed value of x, we can think about this expression as being a function of y. We can write the expression as (1 - x)y + x, which is just my + c where m = 1 - x and c = x. This is the equation of a straight line graph, so it takes every real value, both positive and negative, as long as m 6= 0. The case m = 0 occurs exactly when x = 1, and in this case, the expression becomes (1-1)y+1 = 1, so it is always 1, for every value of y. Therefore (∗) is true for all except exactly one value of x, namely x = 1, and the correct answer is option E.

## Q14
Answer: `D`

Work:
- To solve this question, we use the fact that |x - a| can be understood as the distance of x from a. The first inequality is true if and only if x is closer to -5 than to -11, i.e., if and only if x > -8. The second inequality is true if and only if x is closer to -11 than to -1, i.e., if and only if x < -6. Therefore both inequalities are true if and only if -8 < x < -6, which is an interval of length 2, which is option D. One could also do this question by sketching the graphs of y = |x + 5| and y = |x + 11| and working out where they intersect, and so on. But that requires a lot more work than than the approach presented here.

## Q15
Answer: `F`

Work:
- Since logx y = z, we have y = xz . Likewise z = y x . Combining these gives
- z = y x = (xz )x = xxz . 1 1 Therefore raising the equation to the power of gives z 1/xz = x, hence logz x = , which is xz xz option F.

## Q16
Answer: `D`

Work:
- For each of these, we can try to construct a counterexample, and if that doesn’t work, we may understand why the statement must be true. For simplicity in the explanations below, let’s write
- Amin = minimum of a1 , . . . , a100 Bmin = minimum of b1 , . . . , b100 Cmin = minimum of c1 , . . . , c100
- and similarly for Amax etc.
- I Let’s suppose that Bmin = 0 and Cmin = 0. Can we then make the minimum of the an s greater than zero? Yes, we can: if we take b1 = 0 and the rest of the bn s to be 100, and we take c100 = 0 and the rest of the cn s to be 100, then we can have an = 100 for every n, so the minimum of the an s is 100. Therefore this statement is not necessarily true.
- II If we try the same example as in I, we find that Amin = 100, which is greater than Bmin + Cmin , so the inequality holds in this case. But to get a counterexample, we want to make Amin small. Helpfully, the condition an ≤ bn + cn allows us to make each an as small as we like. So if we take an = 0, bn = 1 and cn = 1 for all n, then the condition will be satisfied for each n, but we will have Amin = 0 and Bmin = Cmin = 1, so Amin < Bmin + Cmin in this case. Therefore this statement is not necessarily true either.
- III Both of the counterexamples we used for I and II satisfy this statement. It is not obvious how to construct a counterexample: every simple example satisfies this statement. So let us instead try to prove it. Each an satisfies the condition an ≤ bn + cn . Now bn ≤ Bmax and cn ≤ Cmax for each n, so an ≤ Bmax + Cmax for each n. But this means that the maximum of all of the an s also satisfies this condition, that is Amax ≤ Bmax + Cmax , so the given statement must be true.
- Therefore only statement III must be true, and the correct answer is option D.

## Q17
Work:
- Considering the offered options, the focus is on the order of the steps and whether the steps prove what they should be proving; there is no requirement for us to check the algebraic calculations themselves. 4a3   The task is to prove that if 27b b + < 0, then x3 + ax2 + b = 0 has three distinct real roots. In step I, the student finds the stationary points of y = x3 + ax2 + b. 4a3   In step II, the student assumes that 27b b + < 0, which is the correct thing to do to prove an ‘if . . . then’ statement. In step III, the student says ‘if the cubic has three distinct real roots then . . . ’, which is correct but is not useful: we know that one of the stationary points is above the x-axis and the other is below and we wish to deduce that the cubic has three distinct real roots. In step IV, the student uses the result of II and the result ‘if one of the stationary points is above the x-axis and one is below, then the equation has three distinct real roots’, which is the converse of the statement in step III. Therefore the correct option is E: the student should have shown the converse of the result in step III.

## Q18
Answer: `E`

Work:
- Let us substitute values into the four equations to begin with. When x = 0, we have
- (cos x)cos x = 11 = 1 (sin x)sin x = 00 = ? (cos x)sin x = 10 = 1 (sin x)cos x = 01 = 0
- This shows that graph Q is y = (sin x)cos x . (We do not know what (sin x)sin x is when x = 0, but from the graphs given, since three of the functions have value 1 at x = 0 and only one is 0, it must be 1.) Next, let us consider the value at x = pi2 :
- (cos x)cos x = 00 = ? (sin x)sin x = 11 = 1 (cos x)sin x = 01 = 0 (sin x)cos x = 10 = 1
- Again, as only one graph has value 0 at x = pi2 , graph P depicts (cos x)sin x . (We did not actually need to calculate the final line of this list, as we have already identified this function as being graph Q.) So we are left with (cos x)cos x and (sin x)sin x as graphs R and S in some order. Let us put in the value x = pi6 , as that is clearly different between the two functions. We have sqrt ! 23 cos x 3 (cos x) =  1 sin x 1 2 (sin x) =
- The first of these looks horrible, but we can approximate the value of the second of these; it is just sqrt12 ≈ 0.7, so this must be graph S. Similarly, (cos x)cos x ≈ 0.7 at x = pi3 , which is graph R. Therefore the graphs are:
- (cos x)cos x : graph R (sin x)sin x : graph S (cos x)sin x : graph P (sin x)cos x : graph Q
- which is option E.

## Q19
Answer: `B`

Work:
- We sketch a part of the polygon with the triangles described in the question:
- θ
- Suppose the angle of one of the triangles is θ, as shown. Then the area of the triangle is given by 12 r2 sin θ where r is the radius of the circle (using the formula A = 12 ab sin C). Since r is the same for each of the triangles, all the triangles will have equal area if and only if sin θ is the same for each triangle. This will certainly be the case if the polygon is regular, but we have to determine if this can be true in any other situation. If two of the triangles have angles at the centre of the circle of θ and φ, then sin φ = sin θ if and only if φ = θ or φ = pi - θ. Can we have the latter possibility? If so, it would mean we have some angles being θ and some being pi - θ. Suppose then that θ is acute and pi - θ is obtuse. (We cannot have a reflex angle as the centre of the circle lies inside the polygon, and if θ is a right angle, then pi - θ = θ.) Suppose further that k of the angles of the polygon triangles equal pi - θ and the remaining n - k equal θ. Then the sum of these triangle angles is given by
- (n - k)θ + k(pi - θ) = 2pi
- since they form a whole circle. We can rearrange this to (n - 2k)θ = (2 - k)pi and hence
- (2 - k)pi θ= . n - 2k
- There can be at most three obtuse angled triangles (as four would be more than a whole circle), so let’s try k = 1, k = 2 and k = 3 in turn. pi If k = 1, we have θ = n-2 . It looks as though this will work for every n, but we have to be a little careful as we need θ to be acute. When n = 3, we get θ = pi, which is not allowed. When n = 4, we get θ = pi2 , which is again not allowed. When n > 4, θ < pi2 , so this does work. Therefore when n ≥ 5, it is possible for the conditions to be satisfied but for the polygon not to be regular. Now consider k = 2, giving θ = n-4 . We only need to consider n = 3 and n = 4, as we have dealt with n ≥ 5 above. This is zero when n = 3, so it does not work for a triangle. When n = 4, this formula is not meaningful (it gives 00 ). We can instead go back to the original equation (n - 2k)θ = (2 - k)pi, which becomes 0 = 0 in this case, meaning that it works for any value of θ. And indeed, this gives two angles of θ and two of pi - θ, so we get a non-regular polygon with equal area triangles. The simplest example is a non-square rectangle. We are left with the case k = 3 to consider. When n = 3, there would be no acute angles and three obtuse ones, and the formula gives θ = -pi pi -3 = 3 . And indeed, a triangle with three
- obtuse angles of pi3 is an equilateral triangle satisfying the conditions. Therefore the only triangle (n = 3) satisfying the conditions is regular. We have thus been able to construct non-regular polygons satisfying the conditions for every n ≥ 4, but not for n = 3. Hence the correct answer is option B.

## Q20
Work:
- We note that we can rewrite each of the functions f2 to f5 in terms of the previous function:
- f1 (x) = cos x f2 (x) = sin f1 (x) f3 (x) = cos f2 (x) f4 (x) = sin f3 (x) f5 (x) = cos f4 (x)
- Since f1 (x) = cos x is periodic with period 2pi, each of the other functions also repeats every 2pi (though it may have a shortest period less than this), and so we only need to consider 0 ≤ x ≤ 2pi. (We could actually restrict ourselves to 0 ≤ x ≤ pi, as the values of cos x in the range pi < x ≤ 2pi are a repeat of the values in the range 0 ≤ x ≤ pi, but we will draw a complete period anyway.) Sketching the graph of each of these functions is the most straightforward way to proceed. We note first a result that we will need later: pi ≈ 3.14 so pi2 ≈ 1.6 and hence sin 1 < sin pi2 = 1. A sketch of f1 (x) = cos x is straightforward:
- y
- x
- -1
- We see that m1 = 1, and the minimum value taken is -1. Now f2 (x) = sin f1 (x), so this goes between - sin 1 and sin 1, with roots where f1 (x) = 0; recall that sin 1 < 1:
- y
- x
- -1
- We see that m2 = sin 1 < 1, and the minimum value taken is - sin 1.
- Now f3 (x) = cos f2 (x). When f2 (x) = 0, f3 (x) = 1, so f3 (x) has a maximum of 1 at x = pi2 and at x = 3pi pi pi 2 . But f3 (x) never reaches 0 as f2 (x) never reaches 2 ≈ 1.6 or - 2 ≈ -1.6. Therefore the graph looks something like this:
- y
- x
- -1
- Therefore m3 = 1, and the minimum value taken is cos(sin 1). Next, f4 (x) = sin f3 (x), so this will be an oscillating curve going between sin(cos(sin 1)) and sin 1:
- y
- x
- -1
- Thus m4 = sin 1. Finally, f5 (x) = cos f4 (x), so this will be an oscillating curve going between cos(sin 1) and cos(sin(cos(sin 1))):
- y
- x
- -1
- To summarise, we have m1 = m3 = 1, m2 = m4 = sin 1 and m5 = cos(sin(cos(sin 1))), and the correct option is E. It is also interesting to note from these accurate graphs that the subsequent functions are getting flatter and flatter and seem to be tending to a straight line (though the limiting value is different in the functions fn where n is even and those where n is odd).

## Answer Summary

`1B 2E 3C 4B 5F 6C 7F 8C 11C 13E 14D 15F 16D 18E 19B`
