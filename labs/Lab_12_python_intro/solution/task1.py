def count_paths(n, m):

    dp = [[0] * m for _ in range(n)]

    dp[0][0] = 1

    for i in range(n):
        for j in range(m):
            if i - 2 >= 0 and j - 1 >= 0:
                dp[i][j] += dp[i - 2][j - 1]
            if i - 1 >= 0 and j - 2 >= 0:
                dp[i][j] += dp[i - 1][j - 2]

    return dp[n - 1][m - 1]

n, m = map(int, input().split())

print(count_paths(n, m))
