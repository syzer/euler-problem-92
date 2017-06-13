numbers :: Int -> [Int]
numbers n = map (\x -> read [x] :: Int) (show n)

square :: Int -> Int
square a = a * a

chain :: Int -> Int
chain = sum . (map square) . numbers

stop :: Int -> Int
stop a
    | a' == 89 = 89
    | a' == 1 = 1
    | otherwise = stop a'
--    move them thru chain
    where a' = chain a

calc :: Int -> Int
calc upperBound = length
    $ filter(==89)
    $ map stop [1..upperBound]
