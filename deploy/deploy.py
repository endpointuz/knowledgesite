from paramiko import SSHClient, AutoAddPolicy

ssh = SSHClient()
ssh.load_system_host_keys()
ssh.set_missing_host_key_policy(AutoAddPolicy())
ssh.connect('94.158.52.41', port=37224, username='selinakyle', password='6rGYJp45G@!H854KLDV73AB44T#9*3F2')

commands = [
    'cd ~/knowledge.uz/knowledge-ep-site/',
    'git pull --rebase origin master',
    'docker-compose restart'
]

ssh_stdin, ssh_stdout, ssh_stderr = ssh.exec_command('; '.join(commands))
print(ssh_stdout.readlines())
