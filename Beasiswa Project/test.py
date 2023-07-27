import json

list = {}

list = {
    'nama':'rifqi',
    'kelas':'i',
    'usia': 21,
    'pekerjaan':'coders'
}

outputnama = 'n'

while (outputnama == 'n' or outputnama == 'N'):
    key = input('pilihan anda : ')
    nya = input('test')
    list[key] = nya
    outputnama = input('n/y')

print('data:')

beautified_dict = json.dumps(list, indent=4)
print(beautified_dict)
