# TMUA Conceptual Refresh

This note is a quick conceptual revision guide built from the patterns that come up repeatedly across the TMUA papers in this repo.

Its purpose is not to reteach every topic from scratch. The aim is to refresh the ideas, habits, and standard moves that let you unlock many TMUA questions quickly and reliably.

## How To Use This Note

- Read this once slowly to rebuild the big picture.
- Revisit the sections that match your weak areas.
- After each section, try a few past-paper questions on that theme.
- Focus on method recognition: TMUA often rewards choosing the right viewpoint more than doing long calculations.

## The Core Mindset

Many TMUA questions look different on the surface but reduce to one of a small number of moves:

- rewrite the expression into a friendlier form
- turn words or geometry into equations
- use a graph to understand how many solutions are possible
- introduce a substitution so the algebra becomes standard
- compare options intelligently instead of doing everything from first principles
- use structure, symmetry, monotonicity, or invariants to avoid brute force

The most useful question to ask is:

`What is the simplest mathematical object hiding inside this question?`

Examples:

- a line and a parabola question is often a discriminant question
- a complicated algebraic expression is often a quadratic in disguise
- a strange integral is often just an area
- a geometry problem is often really about similar triangles, Pythagoras, or a circle radius
- a sequence question is often geometric or arithmetic after one rewrite

## Algebra That TMUA Loves

### 1. Factorisation And Rearrangement

You should be comfortable spotting:

- difference of two squares: `a^2 - b^2 = (a-b)(a+b)`
- quadratics that factor cleanly
- common factors
- hidden quadratics after substitution
- sign arguments after factorisation

Why it matters:

- it converts “solve this” into “find the roots and analyze intervals”
- it reveals structure quickly
- it often turns a nasty-looking expression into something you can reason about without expanding further

Typical habits:

- before expanding, ask if factor form is more useful
- after rearranging, ask if the expression can be viewed as a quadratic in a new variable

### 2. Completing The Square

This is one of the most important TMUA tools.

Use it to:

- find minima and maxima of quadratics
- understand graph shifts
- rewrite circle equations
- compare values symmetrically around a turning point

Key patterns:

- `x^2 + bx = (x + b/2)^2 - (b/2)^2`
- `x^2 + y^2 + ax + by + c = 0` often becomes a circle after completing the square in `x` and `y`

What to see conceptually:

- completing the square turns algebra into geometry
- it tells you where the center or turning point is
- it often makes inequalities much easier to interpret

### 3. Discriminant Thinking

If a line and a curve do not meet, touch once, or meet twice, the discriminant is often the fastest route.

For a quadratic:

- `b^2 - 4ac > 0`: two distinct real roots
- `b^2 - 4ac = 0`: one repeated real root
- `b^2 - 4ac < 0`: no real roots

This is especially useful when:

- a straight line intersects a parabola
- a tangent condition appears
- a parameter asks for the range of values that change the number of solutions

Interpretation:

- algebraic root-count information matches geometric intersection information

### 4. Substitution To Reveal Simplicity

A recurring TMUA move is to define a new variable so the expression becomes familiar.

Common examples:

- let `u = 2^x`
- let `t = f(x)`
- let `y = x + 1/x` or similar, if symmetry suggests it

Good substitution targets:

- repeated powers such as `2^x`, `3^x`
- repeated bracketed expressions
- expressions that make the whole equation look quadratic afterwards

A good substitution should reduce complexity, not just rename symbols.

## Graphs And Functions

### 1. Think In Shapes, Not Just Symbols

A lot of TMUA becomes easier once you ask:

- what does the graph look like?
- where is it increasing or decreasing?
- where are its turning points?
- how many times can it intersect another graph?

Graph intuition helps with:

- number of solutions
- ranges of parameters
- maxima and minima
- transformations
- whether a statement can be true for all values

### 2. Transformations

You should be fluent with these:

- `f(x-c)`: shift right by `c`
- `f(x+c)`: shift left by `c`
- `f(x)+k`: shift up by `k`
- `f(kx)`: horizontal scaling by factor `1/k`
- `af(x)`: vertical scaling by factor `a`

Why this matters:

- TMUA often asks about matching minima, equivalent graphs, or transformed versions of known functions
- transformation questions are usually much faster visually than by full expansion

### 3. Monotonicity

If a function is increasing, decreasing, or one-to-one, then:

- inequalities can be transferred through the function
- equations can have limited numbers of solutions
- inverses behave cleanly

Examples of useful facts:

- `x^3` is increasing for all real `x`
- exponential functions with base greater than `1` are increasing
- logarithms with base greater than `1` are increasing

Be careful:

- not every power function is increasing on all real numbers
- if a function is not one-to-one, algebraic manipulations can create false conclusions

## Sequences And Series

### 1. Arithmetic And Geometric Sequences

Know the language:

- arithmetic: constant difference
- geometric: constant ratio

Core formulas:

- arithmetic sum: `S_n = n/2 (first + last)`
- geometric sum: `S_n = a(1-r^n)/(1-r)` for `r != 1`
- infinite geometric sum: `S = a/(1-r)` when `|r| < 1`

TMUA often hides these in:

- repeated functional patterns
- probability questions
- series with powers in denominators
- comparisons between two progressions

### 2. Convergence

If an infinite geometric series is involved, check convergence first.

You must remember:

- finite sum exists only if `|r| < 1`

This is often the first filter that removes many cases immediately.

### 3. Recursive Or Functional Patterns

Sometimes the question gives the first few objects implicitly and expects you to notice a rule.

Strategy:

- compute the first few cases carefully
- look for multiplicative or additive repetition
- write the conjectured pattern clearly
- justify it before using it

## Trigonometry

### 1. The Essential Identities

These are used constantly:

- `sin^2 x + cos^2 x = 1`
- `tan x = sin x / cos x`
- basic exact values for `0`, `30`, `45`, `60`, `90` degrees or their radian forms

The main skill is not memorizing more identities. It is recognizing when one of these basic identities simplifies the whole problem.

### 2. Solve By Case Splitting

Trig equations often become easier when you split them into simpler cases after factorising or using an identity.

For example:

- reduce everything to `sin x` and `cos x`
- factor
- solve each factor separately
- count solutions in the required interval

### 3. Count Solutions Carefully

TMUA often asks “how many solutions?”

That means:

- understand the interval exactly
- think in terms of the graph
- avoid finding one solution and assuming symmetry without checking

Good habit:

- if the interval is unusual, transform it first, such as from `theta` to `3theta`

## Coordinate Geometry And Circles

### 1. Equation Meaning

You should move comfortably between an equation and a picture.

For lines:

- gradient
- intercepts
- perpendicular gradients
- equation through a point

For circles:

- standard form `(x-a)^2 + (y-b)^2 = r^2`
- center `(a,b)`
- radius `r`

If the equation is not in standard form, complete the square.

### 2. Tangency

A tangent problem often has two natural approaches:

- algebraic: substitute the line into the curve and use a repeated-root condition
- geometric: use radius-perpendicular-to-tangent and similar triangles

TMUA likes both.

Always ask:

- is the discriminant route shorter?
- is there a geometric shortcut?

### 3. Distance Formula

If points lie on circles or a maximum length is asked, the distance formula and geometry of extreme positions are very common.

Standard idea:

- the maximum distance between points on two circles lies along the line joining the centres

## Euclidean Geometry

### 1. Sketch First

A rough sketch is often enough.

You do not need artistic accuracy. You do need:

- the right relative positions
- marked equal angles or equal lengths
- clear labels

The sketch helps you notice:

- similar triangles
- perpendicular relationships
- symmetry
- area decomposition

### 2. Similar Triangles

This is one of the highest-value geometry tools in TMUA.

Use it when:

- there is a tangent and a radius
- parallel lines create repeated angles
- right triangles share an acute angle
- lengths are related proportionally

Remember:

- similarity gives ratios
- once one side is known, many others follow quickly

### 3. Areas

TMUA often wants you to choose the most efficient area method.

Common options:

- `1/2 * base * height`
- `1/2 ab sin C`
- subtract from a larger known area
- compare areas using common factors instead of computing exact values

Good question to ask:

`Do I really need the absolute area, or only a ratio?`

### 4. Pythagoras And Right Triangles

This is often hiding inside more complicated diagrams.

Use it when:

- a tangent creates a right angle
- a rectangle or square introduces right triangles
- a coordinate geometry question becomes a triangle-length question

## Calculus And Area Ideas

### 1. Integration As Area

Even when an integral looks difficult, the graph may make it simple.

Example patterns:

- `sqrt(r^2 - x^2)` is a semicircle
- piecewise areas can be split into standard shapes
- symmetry can reduce work

If you see a familiar curve, think geometrically before integrating symbolically.

### 2. Definite Integrals On Intervals

TMUA likes interval structure.

If you are told something like

- the integral over each unit interval has a pattern

then:

- break larger integrals into those pieces
- reverse limits carefully when needed

Remember:

- `int_a^b f(x) dx = - int_b^a f(x) dx`

### 3. Derivatives And Stationary Points

For optimization or number-of-roots questions:

- find `f'(x)`
- locate stationary points
- evaluate the function there
- interpret what that means for the graph

This often decides:

- whether a cubic has three real roots
- where maxima or minima occur
- whether transformed graphs share a common minimum

## Number And Logic Themes

### 1. Prime Factors And Divisibility

TMUA number questions often reward structural thinking more than arithmetic.

Typical ideas:

- divisibility by `12` means divisibility by `3` and by `4`
- parity arguments
- prime factor powers
- modular patterns

Good habit:

- translate the condition into prime-factor language before testing cases

### 2. Counterexamples

If the question asks whether a statement is always true, a single counterexample destroys it.

So ask:

- can I disprove this faster than I can prove it?

This is especially effective for:

- number theory claims
- inequalities
- “if and only if” style statements
- logical implication questions

### 3. Work With Definitions

If a question introduces a special term or rule, slow down and restate it in plain mathematical language.

Many such questions are easy once translated and hard while still written in words.

## Multiple-Choice Strategy

TMUA is not a standard written exam. The format changes what “good mathematics” looks like.

### 1. Use The Options

Sometimes the options tell you the method:

- all involve `pi`: think geometry or circles
- all are ranges: think discriminant or graph intersections
- all are integers: maybe avoid full symbolic work and reason structurally

### 2. Compare Rather Than Fully Compute

If the question asks for:

- the largest value
- the number of solutions
- which statement is true

then a full exact calculation may be unnecessary.

### 3. Eliminate Aggressively

You do not always need the right answer directly. Often you can remove wrong options by:

- sign
- size
- parity
- domain restrictions
- graph behavior

## A Practical Checklist For New Questions

When you start a TMUA question, run through this mental checklist:

1. What topic is this really testing?
2. Can I simplify or substitute before doing anything else?
3. Would a sketch help?
4. Is there a theorem or standard pattern here?
5. Can I use the answer options to guide the method?
6. Is there a shorter structural route than brute force?

## Topic-by-Topic Refresh Targets

If you want to rebuild your maths efficiently, prioritize these in roughly this order:

1. quadratics: factorisation, completing the square, discriminant
2. functions and graphs: transformations, minima/maxima, intersections
3. trig basics: identities, exact values, solution counting
4. geometry: similar triangles, circles, area methods
5. sequences and series: arithmetic, geometric, convergence
6. calculus basics: derivatives, stationary points, integrals as area
7. number structure: divisibility, prime factors, parity, counterexamples

## What “Exam Ready” Looks Like

You are ready for this style of paper when you can do the following reliably:

- recognize the likely method within the first 20 to 30 seconds
- move between algebra, graph, and geometry viewpoints comfortably
- avoid unnecessary expansion and brute force
- count solutions accurately
- use symmetry and structure naturally
- stay calm when notation looks unfamiliar

## Final Advice

Do not aim to memorize dozens of tricks.

Aim instead to become fast at these habits:

- simplify early
- sketch when helpful
- look for structure
- connect equations to graphs
- connect geometry to algebra
- choose the shortest valid method

That is the real thread running through these TMUA papers.
