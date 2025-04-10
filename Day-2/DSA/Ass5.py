def longestPalindrome(s):
    n = len(s)
    longest = ""

    for i in range(n):
        for j in range(i, n):
            res = s[i:j+1]
            if res == res[::-1] and len(res) > len(longest):
                longest = res
                
    return longest

print(longestPalindrome("babad"))