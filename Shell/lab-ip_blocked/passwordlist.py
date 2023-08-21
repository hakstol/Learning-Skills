 

a = open('passwords.txt', 'r')
b = open('novalista.txt', 'w')

i=0
while i < 101:
	b.write("peter\n")
	b.write(a.readline())
	i += 1

a.close()
b.close()
