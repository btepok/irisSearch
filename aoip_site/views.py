from django.shortcuts import render
from .models import BannedUsers

banned_users = []

def index(request):
    AllBanned = BannedUsers.objects.all()
    BannedHosts = []
    for host in AllBanned:
        BannedHosts.append(str(host))

    if request.headers['host'] in BannedHosts:
        pass
        """return render(request, 'ban.html')"""

    print('Banned: ', BannedHosts)
    return render(request, 'index.html')


def banned(request):
    host = request.headers['host']
    ua = request.headers['User-Agent']
    BannedUsers(host=host, headers=ua).save()
    return render(request, 'ban.html')