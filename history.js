function data(player1,player2,sets,time,t1,t2){
    this.player1=player1;
    this.player2=player2;
    this.sets=sets;
    this.time=time;
    this.t1=t1;
    this.t2=t2;

}

class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    insertFirst(data){
        this.head=new Node(data,this.head);
        this.size++;
    }

    insertLast(data){
        let node=new Node(data);
        let current;

        //if empty
        if(this.head==false){
            this.head=node;
        }
        else{
        current=this.head;

        while(current.next){
            current=current.next;
        }
        current.next=node;
        }

        this.size++;
    }

    insertAt(data,index){
        if(index>0 && index>this.size && index<0)
        return

        if(index==0){
            this.head=new Node(data,this.head);
            return;
        }
        const node=new Node(data);
        let curr,prev;

        curr=this.head;
        let count=0;

        while(count<index){
            prev=curr;//node before index
            count++;
            current=current.next;
        }
        node.next=curr;
        prev.next=node;

        this.size++;
    }

    printList(){
        let current=this.head;

        while(current){
            console.log(current.data)
            current=current.next;
        }
    }
}

const ll=new LinkedList();
