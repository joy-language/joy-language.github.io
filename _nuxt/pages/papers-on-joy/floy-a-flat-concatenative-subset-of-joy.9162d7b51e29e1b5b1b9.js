webpackJsonp([23],{"9hUb":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("Q0e5"),s=!1;var a=function(n){s||t("rjRD")},r=t("VU/8")(null,o.a,!1,a,"data-v-45765aad",null);r.options.__file="pages/papers-on-joy/floy-a-flat-concatenative-subset-of-joy.vue",e.default=r.exports},"G+wU":function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"p[data-v-45765aad]{margin-top:16px;margin-bottom:16px}hr[data-v-45765aad]{margin-bottom:16px}pre[data-v-45765aad]{margin-bottom:auto}code[data-v-45765aad],kbd[data-v-45765aad],pre[data-v-45765aad]{font-family:Roboto Mono,monospace}",""])},Q0e5:function(n,e,t){"use strict";var o=function(){var n=this.$createElement;this._self._c;return this._m(0)};o._withStripped=!0;var s={render:o,staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("article",[n._v("\n  9 - NOV - 2005\n  "),t("p",[n._v("\n    Abstract: There is a subset of Joy in which quotations contain at most one\n    element and nesting of quotations is not allowed.For every Joy program\n    there is a corresponding program in this subset, and when the\n    corresponding program is executed, the original is restored.A translation\n    from full Joy to the subset can be written in full Joy(and,\n    if one wanted to, also in the subset itself).\n  ")]),t("p",[n._v("\n    In most high level programming languages programs contain nested\n    structures, typically in conditionals and loops.Nested structures also\n    arise in data as in nested arrays or nested lists.Concatenative languages\n    such as Forth, Joy, Slava Pestov 's Factor, and Stevan Apters'\n    s cK and XY\n    are no exception.But nesting interrupts the concatenative semantics: a\n    concatenative program must treat a quotation, a contained nested program,\n    as an indivisible unit, but when the quotation is executed by a\n    combinator, its concatenative semantics unfolds.In the \"concatenative\"\n    mailing group Billy Tanksley raised the question whether it would be\n    possible to design a concatenative language without nesting, a flat\n    concatenative language.\n  ")]),t("p",[n._v("\n    The written representation of programs in any language consists of\n    a sequencce of symbols which themselves are sequences of characters.\n    The characters are collected by a scanner or tokeniser to form symbols,\n    and the symbols are examined by a parser to form a syntax tree and by\n    the compiler to form a program which typically is nested.Note that the\n    sequence of symbbols is not nested, but it contains some special\n    symbols such as brackets and IF, THEN, WHILE...These symbols\n    direct the compiler to buils the nested structures.So one can think\n    of the sequencce of symbols as a program that is executed by the compiler\n    and produces an internal nested structure.Surprisingly the sequence\n    of symbols constitutes a flat concatenative language.The compiler\n    computes a\n    function, and so does the interpreter.Hence the composition\n    of the compiler and the interpreter is an interpreter\n    for a flat concatenative\n    language.\n  ")]),t("p",[n._v("\n    Stevan Apter has adopted this principle in his web page "),t("a",{attrs:{href:"http://www.nsl.com/k/xy/xy.htm"}},[n._v(" http: //www/nsl.com/k/xy/xy.htm")]),n._v(". There he\n    uses his concatenative language XY to write a proof - of - concept implementation\n    for a\n    flat concatenative language.The XY language uses a stack X, like all concatenative\n    languages, but also a queue Y.It so happens that this arrangement is suitable\n    implementing a flat concatenative language.Essentially it works by compiling the\n    flat input language to form quotations prior to every execution.So the compilation\n    is done by the XY interpreter, and the result is then again interpreted by XY.The\n    alternative solution offered in the remainder of this note borrows some of these\n    ideas.Instead of a queue Y an ordinary Joy list is used.The flat input language is\n    actually a subset of Joy.\n  ")]),t("p",[n._v('\n    Let Floy("FLat jOY") be that subet of Joy in which quotations are not\n    allowed to contain more than one atom.This means that[][3][dup][ * ]\n    and[map] are allowed, but[[]][1 2 3][\n    [3]\n    ][dup * ] and[[map]] are not.\n    The aim of this note is to demonstrate the following theorem about Joy:\n  ')]),t("pre",[n._v("        For every Joy program J\n  there is a Floy program F which\n  constructs the quotation[J] of the Joy program J:\n    F = >\n  [J]\n  and hence F i == [J] i == J ")]),n._v("\n  The proof uses a technique commonly used in the theory of computability:\n  One shows that there is a translation\n  function T such that T(J) = F.The\n  translation\n  function is computable, so the proof is constructive.The\n  translation could be computed by a program in any Turing complete\n  language.\n  "),t("p",[n._v("\n    Joy is Turing complete, so the translation\n    function from Joy to Floy can be written\n    in Joy itself.Let j2f be a Joy program which takes the quotation[J] of a Joy\n    program J as a parameter and produces the quotation[F] of the corresponding Floy\n    program F.Note that the quotation[F] itself will in general not be a Floy program\n    .\n    The translation program j2f must satisy:\n  ")]),t("pre",[n._v("                 [J] j2f      ==  [F]\n  and hence[J] j2f i == [F] i == [J]\n  and[J] j2f i i == [F] i i == [J] i == J ")]),n._v("\n  From the second line above[J] j2f i == [J] and hence j2f i == id.So j2f\n  is the left inverse of i, and i is the right inverse of j2f.\n  "),t("p",[n._v("\n    The quotation[F] of the Floy program F, when executed by i, has to\n    reconstruct the quotation[J] of the Joy program J, including all internal\n    quotations of J which may b nested.There are two ways in which these\n    quotations can be constructed by F.Both must begin with the empty\n    quotation[].Then, in the forward direcction, start with the first,\n    second..item and append them in that order to the quotation so far.\n    Alternatively, in the reverse direction, start with the last, second - last\n    ..item and prepend them in that order to the quotation so far.Since\n    there are two ways in which a Floy program could operate, there are in\n    fact two possible Floy programs corresponding to a given Joy program.And,\n    for sheer perversity, a Floy program could use a mixture of these two\n    strategies.But such mixtures wil not be further considered here.The\n    forward or backward versions can be constructed by two different\n    Joy - to - Floy programs, j2f - forwards and j2f - reverse.Both Joy - to - Floy\n    programs traverse the original Joy quotation[J] and any of its internal\n    quotations in the forward direction.Both start building[F] as an empty\n    quotation[].Then j2f - forwards starts at the first, second..item of[J]\n    or its internal quotation to build[F] in the forward direction, so that\n    when[F] is ever executed by the i combinator, it will reconstruct[J] in\n    the forward direction.On the other hand, j2f - reverse also starts at the\n    first, second..item to build[F] in the reverse direction, so that when[F] is ever executed by i,\n    it will reconstruct[J] in the reverse\n    direction.Is your head spinning yet ? So was mine when writing the code.\n  ")]),t("p",[n._v("\n    The remainder of this note consists of the separately commented output\n    flatjoy.out from running flatjoy.joy.The first definitions define four\n    quoted Joy programs that will later be used to test the two Joy - to - Floy\n    translators.The first is the program that does nothing, the second\n    contains some actual code without nesting, the third has two occurrances\n    of one level of nesting, and the fourth has two occurrances of two levels. \n  ")]),t("pre",[n._v("  DEFINE \n  P0 == [];#\n  empty code\n  P1 == [2 3 + dup * ];#\n  non - empty code\n  P2 == [\n    [1 2 3][dup * ] map\n  ];#\n  nest data &\n  code\n  P3 == [\n    [\n      [1 2][3 4][5][]\n    ][\n      [dup * ] map\n    ] map\n  ].#double nesting ")]),t("p",[n._v("\n    Next comes the definition of j2f - forwards and its subsidiaries.The\n    forward version[F] has to use a lot of concatenation, so the first\n    definition abbreviates concat to c.The second definition is\n    for j2f - f, a\n    recursive operator, the real workhorse.If the item to be translated is a\n    list, then do some preparation, step recursively through the list, and\n    then do some finalisation.The preparation consists of appending an empty\n    list to what has been constructed so far, and the finalisation consists of\n    appending code which, when executed by i, will append the unit list of the\n    reconstructed list to the partially reconstructed[J].On the other hand,\n    if the item is not a list, but an atom foo, build code and append code\n    which, when executed by i, will append foo to the partially reconstructed\n    [J].The final definition is\n    for j2f - forwards, which must provide an empty\n    starting list[] and then step through[J] by calling j2f - f. \n  ")]),t("pre",[n._v(" DEFINE \n  c == concat;\n  j2f - f == [list]\n    [\n      [\n        [\n          []\n        ] concat\n      ] dip[j2f - f] step[[] cons c] concat\n    ]\n    [\n      [] cons[c] cons concat\n    ]\n  ifte;\n  j2f - forwards == [\n    []\n  ] swap[j2f - f] step. ")]),t("p",[n._v("\n    The following are the tests.For each of P0..P3, we see the original\n    quoted Joy program[J], then its translation[F] by j2f - forwards, then the\n    result of executing this by the i combinator to\n    yield the original[J].\n    For each of P1..P3 we also see the result of executing this by a further i\n    combinator.In[F], remember that c is short\n    for concat. \n  ")]),t("pre",[n._v("  P0 .  []\n\n  P0 j2f - forwards.\n    [\n      []\n    ]\n\n  P0 j2f - forwards i.\n    []\n\n  P1.\n    [2 3 + dup * ]\n\n  P1 j2f - forwards.\n    [\n      [][2] c[3] c[+] c[dup] c[ * ] c\n    ]\n\n  P1 j2f - forwards i.\n    [2 3 + dup * ]\n\n  P1 j2f - forwards i i.\n  25\n\n  P2.\n    [\n      [1 2 3][dup * ] map\n    ]\n\n  P2 j2f - forwards.\n    [\n      [][][1] c[2] c[3] c[] cons c[][dup] c[ * ] c[] cons c[map] c\n    ]\n\n  P2 j2f - forwards i.\n    [\n      [1 2 3][dup * ] map\n    ]\n\n  P2 j2f - forwards i i.\n    [1 4 9]\n\n  P3.\n    [\n      [\n        [1 2][3 4][5][]\n      ][\n        [dup * ] map\n      ] map\n    ]\n\n  P3 j2f - forwards.\n    [\n      [][][][1] c[2] c[] cons c[][3] c[4] c[] cons c[][5] c[] cons c[][]\n      cons c[] cons c[][][dup] c[ * ] c[] cons c[map] c[] cons c[map] c\n    ]\n\n  P3 j2f - forwards i.\n    [\n      [\n        [1 2][3 4][5][]\n      ][\n        [dup * ] map\n      ] map\n    ]\n\n  P3 j2f - forwards i i.\n    [\n      [1 4][9 16][25][]\n    ] ")]),t("p",[n._v("\n    The Floy programs so constructed are almost readable, and with some\n    practice one might even learn to write that way -\n    if one really had to.\n    But there is something\n    else that is unsatisfactory.On inspecting the code\n    for j2f - f and the translations that it produces, we see that both use a\n    lot of concatenations: j2f - f uses concat directly, and the translations\n    use the abbreviation c, which will be executed when the translation is\n    executed by the i combinator.In both cases the concatenation serves to\n    append a quite short list to another list which might already be quite\n    long.But that means that the other longer list has to be copied entirely\n    to have the short list as its new tail.This is inefficient, and a better\n    solution would be to work the other way, so that a short list is prepended\n    rather than appended.\n  ")]),t("p",[n._v("\n    The following definition\n    for translator j2f - reverse addresses the problem.\n    From a given Joy program[J] it constructs in reverse an equivalent Floy\n    program[F] which when executed by the i combinator reconstructs in\n    reverse the original Joy program[J].Instead of c\n    for concat, define s\n    for swoncat, to be used inside the translation[F].The workhorse is\n    j2f - r.If the item is a list do some preparation, recursively step through\n    the list and then do some finalisation.Finalisation consists in\n    prepending[] to the[F] built so far, it will be the starting point when\n    the completed[F] is executed by i.Preparation consists in prepending to[F] code which when executed i will prepend the constructed quotation to\n    the partially rebuilt[J].If the item is not a list but say foo,\n    construct and prepend code which when executed by i, will prepend foo.The\n    final j2f - reverse has to provide an inital empty list[] and after\n    stepping through[J] prepend another empty list to that. \n  ")]),t("pre",[n._v("  DEFINE \n  s == swoncat;\n  j2f - r == [list]\n    [\n      [\n        [swons] swoncat\n      ] dip[j2f - r] step[] swons\n    ]\n    [\n      [] cons[s] cons swoncat\n    ]\n  ifte;\n  j2f - reverse == [] swap[j2f - r] step[] swons. ")]),t("p",[n._v("\n    The tests\n    for j2f - reverse are the same as\n    for j2f - forwards: Show[J], then\n    translate to\n    yield [F], then i the translation to reconstruct[J], and\n    where appropriate, i the reconstruction. \n  ")]),t("pre",[n._v(" P0 .  []\n\n  P0 j2f - reverse.\n    [\n      []\n    ]\n\n  P0 j2f - reverse i.\n    []\n\n  P1.\n    [2 3 + dup * ]\n\n  P1 j2f - reverse.\n    [\n      [][ * ] s[dup] s[+] s[3] s[2] s\n    ]\n\n  P1 j2f - reverse i.\n    [2 3 + dup * ]\n\n  P1 j2f - reverse i i.\n  25\n\n  P2.\n    [\n      [1 2 3][dup * ] map\n    ]\n\n  P2 j2f - reverse.\n    [\n      [][map] s[][ * ] s[dup] s swons[][3] s[2] s[1] s swons\n    ]\n\n  P2 j2f - reverse i.\n    [\n      [1 2 3][dup * ] map\n    ]\n\n  P2 j2f - reverse i i.\n    [1 4 9]\n\n  P3.\n    [\n      [\n        [1 2][3 4][5][]\n      ][\n        [dup * ] map\n      ] map\n    ]\n\n  P3 j2f - reverse.\n    [\n      [][map] s[][map] s[][ * ] s[dup] s swons swons[][] swons[][5] s swons[][4]\n      s[3] s swons[][2] s[1] s swons swons\n    ]\n\n  P3 j2f - reverse i.\n    [\n      [\n        [1 2][3 4][5][]\n      ][\n        [dup * ] map\n      ] map\n    ]\n\n  P3 j2f - reverse i i.\n    [\n      [1 4][9 16][25][]\n    ] ")]),n._v("\n  As may be seen, the reverse Floy programs are much harder to read and write\n  when one\n  's mindset is for postfix notation. Finally, I could not resist flattening \n  the already flattened:\n  "),t("pre",[n._v(" #Double flattening - an exercise in Joy obfuscation:\n    P3 j2f - forwards j2f - reverse.\n    [\n      [][c] s[][map] s swons[c] s[cons] s[] swons[c] s[][map] s swons[c] s[cons] s[] swons[\n        c] s[][ * ] s swons[c] s[][dup] s swons[] swons[] swons[c] s[cons] s[] swons[\n        c] s[cons] s[] swons[] swons[c] s[cons] s[] swons[c] s[]\n      [5] s swons[] swons[c] s[cons] s[] swons[c] s[][4] s swons[c] s[][3] s\n      swons[] swons[c] s[cons] s[] swons[c] s[][2] s swons[c] s[][1] s swons[]\n      swons[] swons[] swons\n    ]\n\n  # partial de - obfuscation - by Joy itself:\n    P3 j2f - forwards j2f - reverse i.\n    [\n      [][][][1] c[2] c[] cons c[][3] c[4] c[] cons c[][5] c[] cons c[][] cons c[] cons c[]\n      [][dup] c[ * ] c[] cons c[map] c[] cons c[map] c\n    ]\n\n  # full de - obfuscation - again by Joy:\n    P3 j2f - forwards j2f - reverse i i.\n  gc - 191 nodes inspected, 126 nodes copied, clock: 1[[\n    [1 2][3 4][5][]\n  ][\n    [dup * ] map\n  ] map]\n\n  # final run of de - obfuscated original:\n    P3 j2f - forwards j2f - reverse i i i.\n    [\n      [1 4][9 16][25][]\n    ] ")]),t("p",[n._v("\n    This ends the output file "),t("a",{attrs:{href:"flatjoy.out"}},[n._v(" flatjoy.out ")]),n._v(" \n    from running the source file\n    "),t("a",{attrs:{href:"flatjoy.joy"}},[n._v(" flatjoy.joy")]),n._v(".\n    The definitions of the two translators j2f - forwards and j2f - backwards\n    have been added in slightly modified form to the\n    Joy library\n    for symbolic manipulation, "),t("a",{attrs:{href:"basic-libraries/symlib.joy"}},[n._v(" symlib.joy")]),n._v(".\n  ")]),t("p",[n._v("\n    Here again is the theorem already mentioned at the beginning:\n  ")]),t("pre",[n._v("        For every Joy program J\n  there is a Floy program F which\n  constructs the quotation[J] of the Joy program J:\n    F = > \n  [J]\n  and hence F i == [J] i == J ")]),n._v("\n  The proof is by induction on the structure of the Joy program J, using\n  either of the two Joy - to - Floy translators just shown.A informal version\n  of the proof is as follows: The base\n  case is\n  for the quoted empty program[];\n  the two tests\n  for P0 have demonstrated the correctness of the\n  translators.For the induction on the length of the program without any\n  internal quotations, the two tests\n  for P1 have demonstrated the\n  correctness.For the induction on the depth of nested quotations, the two\n  tests\n  for each of P2 and P3 demonstrate the correctness.A more formal\n  proof would need to proceed by analysing the actual code\n  for the\n  translators and even of the implementation of Joy, but this is outside the\n  scope of this note.\n  "),t("p",[n._v("\n    The translations into the two versions of Floy contain many occurrances\n    of unitlists of the form[foo], each followed by a c(\n    for concat) in\n    the forward version, or by a s(\n    for swoncat) in the reverse version.\n    It might be thought that unitlists already\n    break the ideal of flatness.\n    For Joy as it is, there seems to be no other solution.But the syntax\n    of Joy could be extended by adding unary operators in prefix notation.\n    Two kinds of solutions suggest themselves:\n  ")]),t("p",[n._v("\n    Writing say Q\n    for one such operator, Q foo would be the same as[foo].\n    Then\n    for the forward and reverse versions of Floy one might write\n    Q foo concat, or Q foo swoncat.Then one might combine the quoting operator\n    with the concat or swoncat in two other unary operators C or S, and then\n    writing C foo, or S foo.\n  ")]),t("p",[n._v("\n    The other kind of solution would introduce an operator F, so that F foo\n    would be the same as[foo] first, with the effect of pushing foo onto the\n    stack.Then concat or swoncat would have to be replaced by append and\n    prepend, possibly by combined unary operators A and P, and then writing A\n    foo, or P foo.\n  ")]),t("p",[n._v("\n    Similar unary operators have been suggested before in different contexts\n    for different purposes.But such a major addition to the syntax does not\n    sit so well with the ideal of simple concatenativity, and no such addition\n    is currently planned\n    for Joy.However, it may so turn out that compelling\n    arguments\n    for additional syntax will emerge in the future. \n  ")])])}]};e.a=s},rjRD:function(n,e,t){var o=t("G+wU");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("rjj0")("477ac568",o,!1,{sourceMap:!1})}});