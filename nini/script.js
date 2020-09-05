c=document.querySelector('#c')
x=c.getContext('2d')
S=Math.sin
C=Math.cos
c.width=c.clientWidth
c.height=c.clientHeight
t=0

Draw=()=>{

  R=(Rl,Pt,Yw,o)=>{
    X=S(p=(A=(M=Math).atan2)(X,Y)+Rl)*(d=(H=M.hypot)(X,Y)),Y=C(p)*d,Y=S(p=A(Y,Z)+Pt)*(d=H(Y,Z)),Z=C(p)*d,X=S(p=A(X,Z)+Yw)*(d=H(X,Z)),Z=C(p)*d
    if(o)X+=oX,Y+=oY,Z+=oZ
  }
  Q=q=>[c.width/2+X/Z*800,c.height/2+Y/Z*800]
  Rn=Math.random

  x.fillStyle='#0008',x.fillRect(0,0,w=c.width,w)
  oX=0,oY=0,oZ=5+S(t/2),G=2
  Rl=t/6,Pt=S(t/2)/2,Yw=t/10
  iBc=20,iPs=1,iPv=.04,g=20,iFv=.5,iPc=10,sql=1,iPsp=200
  
  if(!t){
    x.lineJoin=x.lineCap='round'
    P=Array(iPc).fill().map(v=>[(Rn()-.5)*G*2,(Rn()-.5)*G*2,(Rn()-.5)*G*2,Rn()*Math.PI*2,Math.PI*Rn(),1,iPs])
    B=Array(iBc).fill().map(v=>[(Rn()-.5)*G*2,(Rn()-.5)*G*2,(Rn()-.5)*G*2])
    F=[]
    for(d=0.70710678118654752440084436210485*G*2,i=6;--i;)for(j=4;j--;)F=[...F,[(a=[S(p=Math.PI*2/4*j+Math.PI/4)*d,C(p)*d,G])[i%3]*(l=i>2?-1:1),a[(i+1)%3]*l,a[(i+2)%3]*l]]
  }

  if(!((t*60|0)%4))B=[...B,[(Rn()-.5)*G*2,(Rn()-.5)*G*2,(Rn()-.5)*G*2]]

  F.map((v,i)=>{
    X=v[0]
    Y=v[1]
    Z=v[2]
    R(Rl,Pt,Yw,1)
    if(!(i%4))x.beginPath()
    x.lineTo(...Q())
    if(i%4==3){
      x.strokeStyle='#8888'
      x.lineWidth=5
      x.closePath()
      x.stroke()
    }
  })

  B.map(v=>{
    X=v[0]
    Y=v[1]
    Z=v[2]
    R(Rl,Pt,Yw,1)
    if(Z>0){
      x.beginPath()
      x.arc(...Q(),40/Z,0,7)
      x.fillStyle='#4f86'
      x.fill()
    }
  })

  P=P.filter((v,i)=>!i||v[5]>.01)

  P.map((v,k)=>{
    v[5]/=1.02
    mind=6e6,idx=-1
    B.map((q,j)=>{
      if((d=H(q[0]-v[0],q[1]-v[1],q[2]-v[2]))<mind)idx=j,mind=d
    })
    v[0]+=(vx=S(v[3])*S(v[4])*iPs)*iPv*v[6]
    v[1]+=(vy=C(v[4])*iPs)*iPv*v[6]
    v[2]+=(vz=C(v[3])*S(v[4])*iPs)*iPv*v[6]
    if(mind<v[6]/4){
      B.splice(idx,1)
      v[6]+=iFv
      v[5]=1
      if(v[6]>iPs*1.5){
        P.push(...Array(iPsp/(1+1/v[5]*10)|0).fill().map(q=>{return [v[0],v[1],v[2],v[3]+=(Rn()-.5)*sql,v[4]+=(Rn()-.5)*sql,1,iPs*(.2+Rn()*.8)]}))
        P.splice(k,1)
        return
      }
    } else if(idx!=-1){
      vx-=(v[0]-B[idx][0])/g
      vy-=(v[1]-B[idx][1])/g
      vz-=(v[2]-B[idx][2])/g
    }
    p1=A(vx,vz)
    p2=Math.acos(vy/H(vx,vy,vz))
    v[3]=p1
    v[4]=p2
    while(v[0]>G)v[0]-=G*2
    while(v[1]>G)v[1]-=G*2
    while(v[2]>G)v[2]-=G*2
    while(v[0]<-G)v[0]+=G*2
    while(v[1]<-G)v[1]+=G*2
    while(v[2]<-G)v[2]+=G*2
    x.beginPath()
    for(i=3;i--;){
      X=S(p=Math.PI*2/3*i)*v[6]/10
      Y=C(p)*v[6]/10
      Z=0
      R(0,Math.PI*1.5-v[4],0,0)
      R(0,0,v[3],0)
      X+=v[0]
      Y+=v[1]
      Z+=v[2]
      R(Rl,Pt,Yw,1)
      x.lineTo(...Q())
    }
    x.closePath()
    x.strokeStyle=`hsla(${v[5]*360-50},99%,50%,${Math.min(.5,((.8+v[5])**16)/2)}`
    x.lineWidth=Math.min(6,50/(1+Z)**2)
    x.stroke()
    
    for(i=3;i--;){
      x.beginPath()
      X=v[0]+vx*2*v[6]/10
      Y=v[1]+vy*2*v[6]/10
      Z=v[2]+vz*2*v[6]/10
      R(Rl,Pt,Yw,1)
      x.lineTo(...Q())
      X=S(p=Math.PI*2/3*i)*v[6]/10
      Y=C(p)*v[6]/10
      Z=0
      R(0,Math.PI*1.5-v[4],0,0)
      R(0,0,v[3],0)
      X+=v[0]
      Y+=v[1]
      Z+=v[2]
      R(Rl,Pt,Yw,1)
      x.lineTo(...Q())
      x.strokeStyle=`hsla(${v[5]*360-50},99%,50%,${Math.min(.5,((.8+v[5])**16)/2)}`
      x.lineWidth=Math.min(6,50/(1+Z)**2)
      x.stroke()
    }
  })
  
  t+=1/60
  requestAnimationFrame(Draw)
}

Draw()