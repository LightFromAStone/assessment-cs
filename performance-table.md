        | tinyArray | smallArray | mediumArray | largeArray | extraLargeBigBoiArray |
        |-----------|------------|-------------|------------|-----------------------|
insert  | 10.208 μs | 6.5 μs     | 180.834 μs  | 5.96825 ms | 789.202625 ms         |
append  | 1.875 μs  | 5.167 μs   | 163.166 μs  | 276.334 μs | 2.4295 ms             |

Summary:
Between the two functions, append clearly scales better and in most situations is more performant. You can tell because when you look at the time results for each function at different array sizes, insert increases in them quite quickly, while append increases in time rather slowly. By the time (pun definitely intended) we get to our largest array, insert runs between 300 - 400 times slower. Append looks to  be O(n) while insert is O(n^2). Append has a better time complexity because it only has to add an item to the end of the array. All the other elements in the array say where they are. On the other hand, because insert places the new item at the beginning of the array, each item in the array has to be shifted over one space to make room at the front.

I was surprised to see that tinyArray's insert compared to smallArray's insert was a bit inconsistent. The only reason I can think of for the outlier is that maybe behind the scenes javascript had to extend the size allocation for tinyArray more frequently than it did for smallArray.
