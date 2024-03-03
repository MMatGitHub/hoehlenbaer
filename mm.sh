installiere_nano() {
  apt-get install nano
}

generiere_ssh_key() {
  cd ~/.ssh
  ssh-keygen -b 4096
  nano ~/.ssh/id_rsa.pub
}

verwende_ssh_key() {
 #Nicht kopierbar aus nano oder terminal, daher als html
 cp ~/.ssh/id_rsa.pub /workspace/FrontendStatic/export.html
 cd /workspace/FrontendStatic/hoehlenbaer
 git config core.sshCommand 'ssh -i ~/.ssh/id_rsa' --replace-all
 git config --list
 echo 'manuell aus export.html nach github/gitlab kopieren und hinzufuegen'
}

#installiere_nano
#generiere_ssh_key
#verwende_ssh_key
