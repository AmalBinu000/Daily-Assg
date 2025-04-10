
def lengthOfLongestSubstring(s):
    n = len(s)
    max_ = 0

    for i in range(n):
        sets = set()
        for j in range(i, n):
            if s[j] in sets:
                break
            sets.add(s[j])
            max_ = max(max_, j - i + 1)

    return max_


s = "abcabcbb"
print(lengthOfLongestSubstring(s)) 


  