# TMUA Specimen Paper 2 Worked Notes

Sources:
- Paper PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f711c_TMUA%20Specimen%20Paper%202.pdf>
- Official worked solutions PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f711d_TMUA%20Specimen%20Paper%202%20Official%20Solutions.pdf>
- Answer key PDF: <https://cdn.prod.website-files.com/647b5b55f3f42fc50b2f6e4e/647b5b55f3f42fc50b2f711b_TMUA%20Specimen%20Paper%20Answer%20Key.pdf>

## Notes
- These notes are generated from the official worked solutions and cleaned into markdown.
- Each section keeps the official answer option and a cleaned version of the official reasoning.

## Q1
Answer: `B`

Work:
- We first divide by 2 to get x2 + y 2 + . . . , then complete the square for x and y:
- 2x2 + 2y 2 - 8x + 12y + 15 = 0 ⇐⇒ x2 + y 2 - 4x + 6y + 15 2 =0 ⇐⇒ (x - 2)2 - 22 + (y + 3)2 - 32 + 15 2 =0 ⇐⇒ (x - 2)2 + (y + 3)2 = 11 q so the radius is 2 , which is option B.

## Q2
Answer: `B`

Work:
- We expand the brackets and divide through by the denominator to write everything as a single power of x:
- (3x - 2)2 y= sqrt x x 9x2 - 12x + 4 = 3 x2 1 1 3 = 9x - 12x2 + 4x2 .
- Therefore dy 1 3 5 = 9 × 12 x2 - 12 × (- 12 )x2 + 4 × (- 32 )x2 dx 1 3 5 = 29 x2 + 6x2 - 6x2 .
- Substituting in x = 2 gives us the gradient at x = 2: dy 9 1 1 1 = × sqrt +6× sqrt -6× sqrt dx 2 2 2 2 4 2 9+6-3 = sqrt 2 2 =sqrt = 3 2,
- hence the answer is option B.

## Q3
Answer: `C`

Work:
- We can determine whether x = -4 and/or x = -1 are solutions by substituting them back into the original equation. sqrt sqrt Substituting x = -4 gives x + 5 = -4 + 5 = 1 and x + 3 = -4 + 3 = -1, so this is not a solution. sqrt sqrt Substituting x = -1 gives x + 5 = -1 + 5 = 2 and x + 3 = -1 + 3 = 2, so this is a solution. Where does x = -4 arise? Working backwards, once we have reached the line (x + 4)(x + 1) = 0, it is clear that there are the two proposed solutions. The previous line is just the expansion of this; the equations x2 +5x+4 = 0 and (x+4)(x+1) = 0 are algebraically equivalent, so step (3) is fine. Likewise, x + 5 = x2 + 6x + 9 is algebraically equivalent to these, obtained by a simple rearrangement, so step (2) is fine. And indeed, x = -4 is a solution to this equation, as is easy to check. Therefore the extra solution was introduced at step (1), when we squared the equation: on the first line, x = -4 gives the incorrect -1 = 1, while squaring this gives the correct 1 = 1. Hence the correct answer is C. We can go further, though, and ask how we could correct the solution. If we introduce implication symbols between pairs of lines, it will be clearer what is happening. The symbol ‘ ⇐⇒ ’ indicates that this line is equivalent to the previous line, while ‘ =⇒ ’ indicates that this line follows from the previous line, but not vice versa. The argument now reads as follows:
- x+5=x+3 =⇒ x + 5 = x2 + 6x + 9 ⇐⇒ x2 + 5x + 4 = 0 ⇐⇒ (x + 4)(x + 1) = 0 ⇐⇒ x = -4 or x = -1
- The first line is only a one-way implication, as a2 = b2 does not imply that a = b, for example if a = 1 and b = -1 (as in our case). Since not every line is an ‘if and only if’ implication, all we can say is the following: if the original equation is true, then x = -4 or x = -1. However, this argument does not show that if x = -4 or x = -1, then the original equation is true. So to correctly complete the argument, we must check whether these possibilities satisfy the original equation.

## Q4
Work:
- The statement is a ‘for all’ statement, and can be expressed as a conditional statement:
- For every card, if it has a vowel on its front, then it has an even number on its back.
- Thus a counterexample to this statement is a card for which ‘if it has a vowel on its front, then it has an even number on its back’ is false. This is false if the card has a vowel on its front and it does not have an even number on its back. The only cards with vowels on their front are A and E; of these, E has an even number on its back but A does not. So the only counterexample is A.

## Q5
Answer: `A`

Work:
- The target log3 2 suggests that we want to take logarithms of both sides of the given approximation to base 3, giving log3 25 ≈ log3 33 so that 5 log3 2 ≈ 3 and hence log3 2 ≈ 35 , which is option A.

## Q6
Answer: `F`

Work:
- The area of the rectangle is height times width, so area height = . width To obtain the greatest possible height, we require the greatest possible area and the least possible width. The upper bound for the area is 5650 cm, and the lower bound for the height is 79.5 cm, so the greatest possible height is 5650 79.5 cm, which is option F.

## Q7
Answer: `C`

Work:
- A simple way to decide between the four given options is to determine which of the points (1, 0), (-1, 0), (0, 1) and (0, -1) lie on the graph. We start with (1, 0): this gives 1 × 1 = 1, so (1, 0) lies on the graph. We now look at (0, 1): this gives 1 × 1 = 1, so this also lies on the graph. On the other hand, (-1, 0) gives -1 × 1 = -1 and (0, -1) gives the same, so neither of these points lies on the graph. Therefore the graph must be that shown in option C. Alternatively, we can multiply out the brackets, giving x3 + y 3 = 1; therefore for large values of x, we must have y 3 ≈ -x3 or y ≈ -x, giving A or C. Now when 0 < x < 1, we must have 0 < y < 1, and hence the correct graph is C.

## Q8
Answer: `C`

Work:
- We could start by trying a few examples to get a feeling for the statement.
- n = 0 gives 0 + 1 + 2 + 3 = 6, so (∗) is true in this case.
- n = 1 gives 1 + 2 + 3 + 4 = 10, so (∗) is false in this case.
- n = 2 gives 2 + 3 + 4 + 5 = 14, so (∗) is false in this case.
- n = 3 gives 3 + 4 + 5 + 6 = 18, so (∗) is true in this case.
- Of the given options, this exploration shows: A is false; B is false (as (∗) is false for n = 1); C may be true; D is false (as (∗) is true for n = 3), and E is false. So by elimination, the correct answer must be C. We can also prove this. The sum of the four consecutive integers is
- n + (n + 1) + (n + 2) + (n + 3) = 4n + 6.
- This is a multiple of 6 whenever 4n is a multiple of 6. An integer is a multiple of 6 if and only if it is a multiple of both 2 and 3. 4n is always a multiple of 2, and is a multiple of 3 when n is a multiple of 3 and for no other value of n. Hence option C is correct.

## Q9
Answer: `E`

Work:
- If a statement is false, then its negation is true. The negation of ‘for all x, P’ is ‘there exists x such that not P’. So in this case, a negation is
- There exists a day next week such that it is not the case that Fred will do at least one maths problem.
- ‘It is not the case that Fred will do at least one maths problem’ is equivalent to ‘Fred will do less than one maths problem’; assuming that one cannot do a fraction of a maths problem, this is equivalent to ‘Fred will do no maths problems’. So the whole negation can be written as ‘Some day next week, Fred will do no maths problems’, which is option E.

## Q10
Work:
- We can start by finding the value of y when x is close to 1. When x = 1.1, say, y = log1.1 2, which is equivalent to 1.1y = 2. Now 1.12 = 1.21, so y > 2 (it looks as though y ≈ 10). The only graph with this value of y near x = 1 is E, so this must be the answer. Alternatively, we could rearrange the equation to get xy = 2. y must always be positive, otherwise xy would be less than 1. As x gets large, y must get closer to 0. Putting these together again shows that only graph E works.

## Q11
Answer: `D`

Work:
- We work out or approximate all five numbers.
- A tan 3pi  4 = -1
- B log10 100 = 2
- C sin10 pi2 = 110 = 1 
- D log2 10 = 3. · · · , or more formally, 3 < log2 10 < 4, as 23 = 8 and 24 = 16 sqrt sqrt E 0 < 2 - 1 < 1, so 0 < ( 2 - 1)10 < 1
- Only one of these numbers is greater than 3, so the answer is D.

## Q12
Answer: `A`

Work:
- This is an application of the remainder theorem. If we divide p(x) by (x - 1), we get a quotient q(x) and a remainder r. We can write this as
- p(x) = (x - 1)q(x) + r.
- If we now substitute x = 1 into this identity, we obtain
- p(1) = r,
- so we must have r = 2 (since we are told p(1) = 2). Therefore
- p(x) = (x - 1)q(x) + 2 for some polynomial q(x),
- which is option A. It may be the case that some or all of B, D, E, F, G and H are also true, but we cannot deduce this from the given information. C must be false, as if we substitute x = 1, we obtain 2 = -2.

## Q13
Answer: `C`

Work:
- Let us indicate the runners by their initials, and write A > B to mean that A beat B. We are given F > G, H > L, L > G and R > G, which combine to give F > G, H > L > G, R > G. So G came last, and the other four runners could have come in any order, except that H > L. There are 4! = 24 ways of ordering these four runners. In half of them, H > L, while in the other half, L > H. (More precisely, we can pair every finishing order with H > L together with the finishing order in which H and L are swapped, so there are the same number of finishing orders with H > L as there are with L > H.) So the number of possible finishing orders is 24 2 = 12, and the answer is C.

## Q14
Work:
- We can work out the locations of the local maxima and minima by solving dx dy = 0. We have
- dy = 5ax4 + 4bx3 + 3cx2 + 2dx + e, dx which is a quartic (a degree 4 polynomial). This can have at most 4 roots, so there are at most 4 stationary points. This does not seem to help us that much, as all of the options have at most 4 stationary points! We also observe that we are starting with a degree 5 polynomial, so if a > 0, y tends to +infinity as x tends to +infinity and y tends to -infinity as x tends to -infinity. Similarly, if a < 0, we have the reverse of this. If we now try sketching the four possibilities offered, we will see what happens:
- A Two local minima and two local maxima might look like this:
- y
- x
- This seems plausible.
- B One local minimum and two local maxima might look like this:
- y
- x
- This is not possible, because y tends to -infinity both when x tends to +infinity and to -infinity.
- C One local minimum and one local maximum might look like this:
- y
- x
- This seems plausible; there is no requirement that the quartic dx dy = 0 has four real roots, so there need not be exactly four stationary points.
- D The curve y = x5 has no local minima or local maxima (though it does have a point of inflection at the origin), so this is certainly possible.
- So the only one which is not possible is B. If we want to construct explicit examples of A and C, we could start by choosing dx dy as a quartic which has exactly four real roots (such as (x - 1)(x - 2)(x - 3)(x - 4)) or exactly two real roots (such as (x2 + 1)(x - 1)(x - 2)) and then integrating it to obtain our desired function. Similarly, if we wanted to find an example for D which has no stationary points at all, we could integrate a function such as (x2 + 1)2 .

## Q15
Work:
- 1 If we multiply the original inequality a ⩾ b by -1, we obtain -a ⩽ -b, since multiplying by a negative number reverses the inequality. This is equivalent to -b ⩾ -a, so this statement must be true.
- 2 We can rearrange this inequality as a2 - 2ab + b2 ⩾ 0, and then factorise the left hand side to get (a - b)2 ⩾ 0. As x2 ⩾ 0 for every real number x, this statement must be true. (Note that the condition a ⩾ b is irrelevant here.)
- 3 This is related to the original inequality by multiplying it by c. If c = -1, then this inequality states -a ⩾ -b, which will not be the case unless a = b. For example, a = 2, b = 1, c = -1 provides an example where a ⩾ b but ac ⩾ bc is false. So this statement might not be true.
- Hence the correct option is E.

## Q16
Answer: `A`

Work:
- We start by calculating the first few terms of the sequence:
- a1 = 2 a2 = 2 + (-1)1 = 1 a3 = 1 + (-1)2 = 2 a4 = 2 + (-1)3 = 1 a5 = 1 + (-1)4 = 2
- The pattern is now clear: every pair of terms is 2, 1 and sums to 3. So n=1 an is the sum of P100 50 pairs of terms, each of which sums to 3. Hence X an = 50 × 3 = 150 n=1
- and the answer is A.
- Commentary: Note that this is not an arithmetic series, as there is not a common difference (that is, equal difference) between consecutive terms, and neither is it a geometric series. So we cannot use the formulae for the sum of an arithmetic or geometric series.

## Q17
Answer: `E`

Work:
- We are being asked to negate the statement ‘n is an S-number’, that is, to negate the statement
- for every factor m of n with m > 1, the number m is a multiple of some number in S.
- The negation of ‘for every m, P’ is ‘there exists m such that not P’, a negation is
- there exists a factor m of n with m > 1 such that it is not the case that the number m is a multiple of some number in S.
- (Note that ‘a factor m of n with m > 1’ is the condition on the numbers m which are being considered by the ‘for every’, so it is not changed by the negation.) ‘There exists’ is the same as ‘for some’, so the correct answer is either D, E or F. We next need to simplify the second half of our new statement, namely ‘it is not the case that the number m is a multiple of some number in S’. If it is not the case that ‘the number m is a multiple of some number in S’, then it must be that m is not a multiple of any number in S, or equivalently, that no number in S is a factor of m. Therefore a full negation is
- for some factor m of n with m > 1, there is no number in S which is a factor of m,
- so the correct answer is E.

## Q18
Answer: `E`

Work:
- We can approach this algebraically or just by reasoning about numbers. We begin with an algebraic approach. Let the five numbers be, in increasing order, a, b, c, d, e, so that the median is c. The range is 20, so e - a = 20 or a = e - 20. Also, the mean is zero, so a + b + c + d + e = 0. Since c ⩽ d ⩽ e, a = e - 20 and a ⩽ b ⩽ c, we see that the sum of the five numbers is at least
- (e - 20) + (e - 20) + c + c + c = 3c + 2e - 40
- Since the sum is zero, this means that 0 ⩾ 3c + 2e - 40, or that 3c ⩽ 40 - 2e, so 3c + 2e ⩽ 40. But c ⩽ e, so 5c ⩽ 3c + 2e ⩽ 40, so c ⩽ 8. We can have c = d = e = 8 and then a = b = -12, so the largest possible median is 8, option E.
- Alternatively, we can just reason as follows. Let’s say that we have five numbers
- a b c d e
- arranged in increasing order, with mean 0 and range 20, and let’s suppose that the median is as large as possible. We ask if there is any way of increasing c while keeping the mean equal to 0 and the median equal to 20. If c < d, then we can increase the median without changing the mean or range by replacing each of c and d by their mean. So we must have c = d. Similarly, if d < e, we could increase both c and d by a small amount and decrease e and a by the same small amount. As long as d and e don’t swap order in this process, the mean and range will not change, but the median will increase. (So we must take this small amount to be at most 12 (e - d).) Therefore we must have c = d = e. Now consider a and b. If a < b, we can do a similar trick: we increase a, c, d and e by a small amount k and decrease b by 4k; this preserves the mean and range while increasing the median. (So that a and b don’t swap places, we require k to be at most 14 (b - a).) It follows that a = b. We therefore have a = b and c = d = e. Since the range is 20, the numbers must be a, a, a + 20, a + 20, a + 20. Their sum is 5a + 60 = 0, so a = -12 and a + 20 = 8, which is the largest possible median.

## Q19
Answer: `B`

Work:
- The first equation can be rewritten as
- f(x) = x3 + ax2 - bx - c = 0 (1)
- and the second equation as g(x) = x3 - ax2 - bx + c = 0. (2) Comparing these two equations, we see that the coefficient of x2 and the constant term have been negated. We can also negate equation (2) to give
- - g(x) = -x3 + ax2 + bx - c = 0. (3)
- This is similar to equation (1), but now the coefficients of x3 and x have been negated. This indicates that we can relate this to equation (1) by substituting in -x. We find that
- f(-x) = (-x)3 + a(-x)2 - b(-x) - c = -x3 + ax2 + bx - c = -g(x)
- and so equation (3) becomes f(-x) = 0. Since we are told that f(x) = 0 has three real roots, one positive and two negative, and f(-x) = 0 must have three real roots, one negative and two positive. (It might be helpful to note here that y = f(-x) is the reflection of y = f(x) in the y-axis.) Hence the answer is B.

## Q20
Answer: `D`

Work:
- For ease of explanation, we say ‘Mr X is true/false’ as a shorthand for ‘Mr X’s statement is true/false’. Of these statements, Ms Q and Mr T give the most explicit information, so we start with them. They cannot both be true, as they contradict each other, though they could both be false. So we look at these three possibilities in turn.
- Ms Q true, Mr T false. Since Ms Q is true, Ms S is also true, which means that either Mr P or Mr R is true (as Mr T is false). If Mr R is true, then Mr P is also true, contradicting Ms S. So Mr R must be false. Since Ms S is true, Mr P must be true; this does not pose a problem with Mr R being false, as it could be that Mr R’s first name is not Robert. We must, though, check whether Mr P’s statement being true is consistent with the remaining statements. We have Mr P, Ms Q and Ms S true and the other two false, giving three true statements. Thus Mr P’s statement is, indeed, true, and this is a possible set of truth values for the statements. • Ms Q false, Mr T true. Since Mr T is true, Ms S is false, and so either Mr P, Mr R or both must be true (as Mr T is already true). If Mr P is true, there are two true statements from Mr P, Ms Q, Ms S and Mr T, which is an even number, so Mr R must also be true. This is consistent, as Mr R says that Mr P’s statement is true, which it is. If Mr R is true, then Mr P must also be true, and this is feasible as we have just seen. So in this case, we have Mr T, Mr P and Mr R all true, with the other two false, giving three true statements. • Both Ms Q and Mr T false. Then exactly one statement made by a woman must be true, hence Ms S must be true. This requires exactly one of Mr P and Mr R to be true (as Mr T is false). If Mr R is true, then Mr P would also be true, which is not possible. If, on the other hand, Mr P is true and Mr R is false (say his first name is not Robert, as before), then we would have only Mr P and Ms S being true, and that is an even number of true statements. So this is not possible (as Mr P says there are an odd number of true statements).
- Hence we must have one of the first two possibilities, and there are exactly three true statements; the answer is option D.
- Commentary: You might find this question easier to work out using a little table with ticks and crosses, for example something like:
- Mr P Ms Q Mr R Ms S Mr T X × X
- where Mr R and Ms S are not yet determined.
- We are Cambridge Assessment Admissions Testing, part of the University of Cambridge. Our research-based tests provide a fair measure of skills and aptitude to help you make informed decisions. As a trusted partner, we work closely with universities, governments and employers to enhance their selection processes.
- Cambridge Assessment Admissions Testing The Triangle Building Shaftesbury Road Cambridge CB2 8EA United Kingdom
- Admissions tests support: admissionstesting.org/help

## Answer Summary

`1B 2B 3C 5A 6F 7C 8C 9E 11D 12A 13C 16A 17E 18E 19B 20D`
