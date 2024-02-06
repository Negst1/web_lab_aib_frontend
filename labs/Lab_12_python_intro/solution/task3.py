lines = []
while True:
    line = input()
    if line:
        lines.append(line)
    else:
        break
text = '\n'.join(lines)

character_count = {}
for char in text:
    if char.isalnum():
        if char in character_count:
            character_count[char] += 1
        else:
            character_count[char] = 1

sorted_characters = sorted(character_count.keys())

max_count = max(character_count.values())
for i in range(1, max_count + 1):
    for char in sorted_characters:
        if character_count.get(char, 0) >= max_count - i + 1:
            print('#', end='')
        else:
            print(' ', end='')
    print()

for char in sorted_characters:
    print(char, end='')
