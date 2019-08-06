### 获取所有用户

http：//localhost：3000/users

### 获取id为1 的用户信息

http：//localhost：3000/users/1

### 获取公司所有信息

http：//localhost：3000/companies

### 获取单个公司信息

http：//localhost：3000/companies/1

### 获取所有公司id为3的用户

http：//localhost：3000/companies/3/users

### 根据公司名字获取信息

http：//localhost：3000/companies？name=Microsoft

### 根据多个公司名字获取公司信息

http：//localhost：3000/companies？name=microsoft&name=apple

### 获取一页中只有两条数据

http：//localhost：3000/companies？_ _page=1&_  _limit=2

### asc升序和desc降序

http：//localhost：3000/companies？_sort = name & _ order = asc(desc)

### 获取年龄30以上的

http：//localhost：3000/users?age _gte = 30

### 年龄30以上40以下的

http：//localhost：3000/users?age _gte = 30 & _lte = 40

### 搜索用户信息

http：//localhost：3000/users ？ q = h   //搜索带h的用户信息



