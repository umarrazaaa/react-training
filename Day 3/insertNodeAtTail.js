

function insertNodeAtTail(head , data)
{
    if(!head)
    {
        head = new SinglyLinkedListNode(data,null);
        return head;
    }

    let current = head;
    while(current.next)
    {
        current = current.next;
    }
    current.next = new SinglyLinkedListNode(data,null);
    return head;
}