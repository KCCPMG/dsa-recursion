"""Produce new square adding two inputs squares.

Two simple squares can be added::

    >>> s1 = 0
    >>> s2 = 1

    >>> add(s1, s2)
    1

A simple square and a split square can be added::

    >>> s1 = 0
    >>> s2 = [1, 0, 1, 0]

    >>> add(s1, s2)
    [1, 0, 1, 0]

Two split squares can be added::

    >>> s1 = [0, 0, 0, 1]
    >>> s2 = [0, 1, 0, 1]

    >>> add(s1, s2)
    [0, 1, 0, 1]

Nested squares can be added::

    >>> s1 = [0, [1, 1, 1, [0, 0, 0, 0]], [0, 0, 0, 0], 1]
    >>> s2 = [1, [1, 0, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]

    >>> add(s1, s2)
    [1, [1, 1, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]

Unevenly-nested squares can be added::

    >>> s1 = [0, [1, 1, 1, 0           ], [0, 0, 0, 0], 1]
    >>> s2 = [1, [1, 0, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]

    >>> add(s1, s2)
    [1, [1, 1, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]

    >>> s1 = [0, [1, 1, 1, 1                      ], [0, 0, 0, 0], 1]
    >>> s2 = [1, [1, 0, 1, [0, [0, 0, 0, 0], 1, 1]], [1, 0, 1, 0], 1]

    >>> add(s1, s2)
    [1, [1, 1, 1, [1, [1, 1, 1, 1], 1, 1]], [1, 0, 1, 0], 1]

    >>> s1 = 1
    >>> s2 = [1,0,1,0]
    >>> add(s1, s2)
    [1, 1, 1, 1]
"""


def add(s1, s2):
    """Produce new split square adding two input squares."""
    # both integers
    if (type(s1) == int and type(s2) == int): 
        if (s1==1 or s2==1):
            return 1
        else:
            return 0
    # one int, one list
    elif (type(s1) == int and type(s2) == list):
        return [add(s1, el) for el in s2]
    elif (type(s1) == list and type(s2) == int):
        return [add(s2, el) for el in s1]
    # both lists
    else:
        return [add(s1[0],s2[0]), add(s1[1],s2[1]), add(s1[2],s2[2]), add(s1[3],s2[3])]



if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASS; YOU'RE A RECURSION WIZARD!\n")
